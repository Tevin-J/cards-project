import { ThunkAction, ThunkDispatch } from "redux-thunk"
import {AppStateType, InferActionTypes} from "../../../../n1-main/m2-bll/store"
import {registerApi} from "../r3-dal/registerApi";




type InitialStateType = typeof initialState
const initialState = {
    isSuccess: true,
    isError: false
}
const registrationReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    return state
}

type LoginActionType = InferActionTypes<typeof actions>
const actions = {

}


type ThunkType = ThunkAction<void, AppStateType, unknown, LoginActionType>

export const toRegister = (email: string, password: string): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, LoginActionType>, getState: () => AppStateType) => {
        const response = await registerApi.register(email, password)
    }
export default registrationReducer