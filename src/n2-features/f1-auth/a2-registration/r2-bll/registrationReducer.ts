import { ThunkAction, ThunkDispatch } from "redux-thunk"
import {AppStateType, InferActionTypes} from "../../../../n1-main/m2-bll/store"
import {registerApi} from "../r3-dal/registerApi";



type InitialStateType = typeof initialState
const initialState = {
    isSuccess: false,
    isError: false
}
const registrationReducer = (state: InitialStateType = initialState, action: RegisterActionsType): InitialStateType => {
    switch (action.type) {
        case "App/AuthBlock/RegistrationReducer/REGISTER_IS_SUCCESS":
            return {
                ...state,
                isSuccess: action.value
            };
        case "App/AuthBlock/RegistrationReducer/REGISTER_IS_ERROR":
            return {
                ...state,
                isError: true
            }
    }
    return state
}

type RegisterActionsType = InferActionTypes<typeof actions>

const actions = {
    registerIsSuccess: (value: boolean) => ({type: "App/AuthBlock/RegistrationReducer/REGISTER_IS_SUCCESS", value} as const),
    registerIsError: () => ({type: "App/AuthBlock/RegistrationReducer/REGISTER_IS_ERROR"} as const)
}


type ThunkType = ThunkAction<void, AppStateType, unknown, RegisterActionsType>

export const toRegister = (email: string, password: string): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, RegisterActionsType>, getState: () => AppStateType) => {
    debugger
        try {
            const response = await registerApi.register(email, password);
            if (response.data.success)dispatch(actions.registerIsSuccess(true))
        } catch (err) {
            dispatch(actions.registerIsError());
            console.error(err);
        }
    }

export default registrationReducer