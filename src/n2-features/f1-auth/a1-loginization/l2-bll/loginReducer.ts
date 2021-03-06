import {loginApi} from "../l3-dal/loginApi";
import {AppStateType, InferActionTypes} from "../../../../n1-main/m2-bll/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

type InitialStateType = typeof initialState
const initialState = {
    isSuccess: false,
    isError: false,
    isLoading: false,
    token: ''
}
const loginReducer = (state: InitialStateType = initialState, action: LoginActionType): InitialStateType => {
    switch (action.type) {
        case 'App/AuthBlock/LoginReducer/TOGGLE_IS_SUCCESS':
            return {
                ...state,
                isSuccess: action.value,
                isError: false,
                isLoading: false,
                token: action.token
            }
        case 'App/AuthBlock/LoginReducer/TOGGLE_IS_ERROR':
            return {
                ...state,
                isError: action.value,
                isSuccess: false,
                isLoading: false
            }
        case 'App/AuthBlock/LoginReducer/TOGGLE_IS_LOADING':
            return {
                ...state,
                isLoading: action.value
            }
    }
    return state
}
/*actions*/
const actions = {
    toggleIsSuccess: (value: boolean, token: string) => ({type: 'App/AuthBlock/LoginReducer/TOGGLE_IS_SUCCESS', value, token} as const),
    toggleIsError: (value: boolean) => ({type: 'App/AuthBlock/LoginReducer/TOGGLE_IS_ERROR', value} as const),
    toggleIsLoading: (value: boolean) => ({type: 'App/AuthBlock/LoginReducer/TOGGLE_IS_LOADING', value} as const)
}
type LoginActionType = InferActionTypes<typeof actions>
/*thunks*/
type ThunkType = ThunkAction<void, AppStateType, unknown, LoginActionType>
export const toLogin = (email: string, password: string, rememberMe: boolean): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, LoginActionType>, getState: () => AppStateType) => {
        dispatch(actions.toggleIsLoading(true))
        try {
            const response = await loginApi.login(email, password, rememberMe)
            dispatch(actions.toggleIsSuccess(true, response.data.token))
        } catch (e) {
            dispatch(actions.toggleIsError(true))
            console.error(e);
        }
    }
export default loginReducer