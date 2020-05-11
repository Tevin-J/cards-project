import {AppStateType, InferActionTypes} from "../../../../n1-main/m2-bll/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import { newPassApi } from "../n3-dal/newPassApi";

type InitialStateType = typeof initialState
const initialState = {
    isSuccess: false,
    isError: false,
    isLoading: false
}
const newPassReducer = (state: InitialStateType = initialState, action: NewPassActionType): InitialStateType => {
    switch (action.type) {
        case 'App/AuthBlock/newPassReducer/PASS_IS_SUCCESS':
            return {
                ...state,
                isSuccess: action.value
            }
        case 'App/AuthBlock/newPassReducer/PASS_IS_ERROR':
            return {
                ...state,
                isError: action.value
            }
        case 'App/AuthBlock/newPassReducer/PASS_IS_LOADING':
            return {
                ...state,
                isLoading: action.value
            }
    }
    return state
}
/*actions*/
const actions = {
    passIsSuccess: (value: boolean) => ({type: 'App/AuthBlock/newPassReducer/PASS_IS_SUCCESS', value} as const),
    passIsError: (value: boolean) => ({type: 'App/AuthBlock/newPassReducer/PASS_IS_ERROR', value} as const),
    passIsLoading: (value: boolean) => ({type: 'App/AuthBlock/newPassReducer/PASS_IS_LOADING', value} as const)
}
type NewPassActionType = InferActionTypes<typeof actions>
/*thunks*/
type ThunkType = ThunkAction<void, AppStateType, unknown, NewPassActionType>
export const toSetPassword = (password: string, resetPasswordToken: string): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, NewPassActionType>, getState: () => AppStateType) => {
        dispatch(actions.passIsLoading(true))
        try {
            const response = await newPassApi.setNewPass(password, resetPasswordToken)
            dispatch(actions.passIsLoading(false))
            dispatch(actions.passIsSuccess(true))
            dispatch(actions.passIsError(false))
        } catch (e) {
            dispatch(actions.passIsLoading(false))
            dispatch(actions.passIsSuccess(false))
            dispatch(actions.passIsError(true))
            console.error(e);
        }
    }
export default newPassReducer