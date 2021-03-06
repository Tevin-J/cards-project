import { ThunkAction, ThunkDispatch } from "redux-thunk"
import {AppStateType, InferActionTypes} from "../../../../n1-main/m2-bll/store"
import {registerApi} from "../r3-dal/registerApi";

type InitialStateType = typeof initialState
const initialState = {
    isSuccess: false,
    isError: false,
    isLoading: false
}

const registrationReducer = (state: InitialStateType = initialState, action: RegisterActionsType): InitialStateType => {
    switch (action.type) {
        case "App/AuthBlock/RegistrationReducer/REGISTER_IS_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isSuccess: action.value
            };
        case "App/AuthBlock/RegistrationReducer/REGISTER_IS_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        case "App/AuthBlock/RegistrationReducer/REGISTER_IS_LOADING":
            return {
                ...state,
                isLoading: true
            }
    }
    return state
}

type RegisterActionsType = InferActionTypes<typeof actions>

const actions = {
    registerIsSuccess: (value: boolean) => ({type: "App/AuthBlock/RegistrationReducer/REGISTER_IS_SUCCESS", value} as const),
    registerIsError: () => ({type: "App/AuthBlock/RegistrationReducer/REGISTER_IS_ERROR"} as const),
    registerIsLoading: () => ({type: "App/AuthBlock/RegistrationReducer/REGISTER_IS_LOADING"} as const)
}


type ThunkType = ThunkAction<void, AppStateType, unknown, RegisterActionsType>

export const toRegister = (email: string, password: string): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, RegisterActionsType>, getState: () => AppStateType) => {
        dispatch(actions.registerIsLoading());
        try {
            const response = await registerApi.register(email, password);
            if (response.data.success)dispatch(actions.registerIsSuccess(true))
        } catch (err) {
            dispatch(actions.registerIsError());
            console.error(err);
        }
    }

export default registrationReducer