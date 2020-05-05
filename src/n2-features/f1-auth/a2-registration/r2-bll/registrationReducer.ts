import { ThunkAction, ThunkDispatch } from "redux-thunk"
import {AppStateType, InferActionTypes} from "../../../../n1-main/m2-bll/store"
import {registerApi} from "../r3-dal/registerApi";


export const REGISTER_IS_SUCCESS = "cards-project/auth/regReducer/REGISTER_IS_SUCCESS";
export const REGISTER_IS_ERROR = "cards-project/auth/regReducer/REGISTER_IS_ERROR";



type InitialStateType = typeof initialState
const initialState = {
    isSuccess: false,
    isError: false
}
const registrationReducer = (state: InitialStateType = initialState, action: RegisterActionsType): InitialStateType => {
    switch (action.type) {
        case REGISTER_IS_SUCCESS:
            return {
                ...state,
                isSuccess: action.value
            }
        case REGISTER_IS_ERROR:
            return {
                ...state,
                isError: action.value
            }
    }
    return state
}

type RegisterActionsType = InferActionTypes<typeof actions>

const actions = {
    registerIsSuccess: (value: boolean) => ({type: REGISTER_IS_SUCCESS, value}),
    registerIsError: (value: boolean) => ({type: REGISTER_IS_ERROR, value})
}


type ThunkType = ThunkAction<void, AppStateType, unknown, RegisterActionsType>

export const toRegister = (email: string, password: string): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, RegisterActionsType>, getState: () => AppStateType) => {
    debugger
        try {
            const response = await registerApi.register(email, password)
            debugger
            dispatch(actions.registerIsSuccess(true))
            dispatch(actions.registerIsError(false))
        } catch (err) {
            dispatch(actions.registerIsSuccess(false))
            dispatch(actions.registerIsError(true))
            console.error(err);
        }
    }

export default registrationReducer