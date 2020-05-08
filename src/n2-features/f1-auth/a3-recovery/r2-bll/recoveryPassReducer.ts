import {AppStateType, InferActionTypes} from "../../../../n1-main/m2-bll/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import { recoveryApi } from "../r3-dal/recoveryApi";

type InitialStateType = typeof initialState
const initialState = {
    isSuccess: false,
    isError: false,
    isLoading: false
};

const recoveryPassReducer = (state: InitialStateType = initialState, action: RecoveryPassActionType): InitialStateType => {
    switch (action.type) {
        case 'App/AuthBlock/RecoveryPassReducer/RECOVERY_IS_SUCCESS':
            return {
                ...state,
                isSuccess: action.value
            }
        case 'App/AuthBlock/RecoveryPassReducer/RECOVERY_IS_ERROR':
            return {
                ...state,
                isError: action.value
            }
        case 'App/AuthBlock/RecoveryPassReducer/RECOVERY_IS_LOADING':
            return {
                ...state,
                isLoading: action.value
            }
    }
    return state
};

const actions = {
    recoverySuccess: (value: boolean) => ({type: 'App/AuthBlock/RecoveryPassReducer/RECOVERY_IS_SUCCESS', value} as const),
    recoveryError: (value: boolean) => ({type: 'App/AuthBlock/RecoveryPassReducer/RECOVERY_IS_ERROR', value} as const),
    recoveryLoading: (value: boolean) => ({type: 'App/AuthBlock/RecoveryPassReducer/RECOVERY_IS_LOADING', value} as const)
};

type RecoveryPassActionType = InferActionTypes<typeof actions>

type ThunkType = ThunkAction<void, AppStateType, unknown, RecoveryPassActionType>

export const toRecoveryPass = (email: string): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, RecoveryPassActionType>, getState: () => AppStateType) => {
        dispatch(actions.recoveryLoading(true))

        try {
            const response = await recoveryApi.forgot(email);
            if (response.data.success)dispatch(actions.recoverySuccess(true))
            dispatch(actions.recoveryError(false))
            dispatch(actions.recoveryLoading(false))
        } catch (error) {
            dispatch(actions.recoverySuccess(false))
            dispatch(actions.recoveryError(true))
            dispatch(actions.recoveryLoading(false))
            console.error(error);
        }
    };

export default recoveryPassReducer