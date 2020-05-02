import {loginApi} from "../l3-dal/loginApi";
import {useHistory} from "react-router-dom";
import {PROFILE_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";
import {AppStateType, InferActionTypes} from "../../../../n1-main/m2-bll/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

type InitialStateType = typeof initialState
const initialState = {
    isSuccess: true,
    isError: false,
    isLoading: false
}
const loginReducer = (state: InitialStateType = initialState, action: LoginActionType): InitialStateType => {
    return state
}
type LoginActionType = InferActionTypes<typeof actions>
const actions = {

}
/*thunks*/
type ThunkType = ThunkAction<void, AppStateType, unknown, LoginActionType>
export const toLogin = (email: string, password: string, rememberMe: boolean): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, LoginActionType>, getState: () => AppStateType) => {
        const response = await loginApi.login(email, password, rememberMe)
        try {
            const history = useHistory();
            history.push(PROFILE_PAGE)
        } catch (e) {
            console.log(e);
        }

    }
export default loginReducer