import Button from "../../../../n1-main/m1-ui/common/Button/Button";
import React from 'react'
import {AppStateType, InferActionTypes} from "../../../../n1-main/m2-bll/store";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import {CardType, packsApi} from "../p3-dal/packsApi";

export type PacksKitType = Array<CardType>
/*export type PackType = {
    id: number
    name: string
    rating: number
    grade: number
    button: JSX.Element

}*/
type InitialStateType = {
    packsKit: PacksKitType,
    totalItemsCount: number
}
const initialState: InitialStateType = {
    packsKit: [
        {
            _id: '1',
            _v: 2,
            user_id: 'string',
            name: 'string',
            path: 'string',
            grade: 3,
            shots: 4,
            rating: 5,
            type: 'string',
            created: 'string',
            updated: 'string',
            currentPage: 1,
            pageSize: 3

        }
    ],
    totalItemsCount: 0
};

const packsKitReducer = (state: InitialStateType = initialState, action: PacksKitActionType): InitialStateType => {
    switch (action.type) {
        case "App/CardsBlock/PacksKitReducer/GET_PACKS_SUCCESS":
            return {
                ...state,
                packsKit: action.cardPacks,
                totalItemsCount: action.cardPacksTotalCount
            }
    }
    return state
};
const actions = {
    getPacksSuccess: (cardPacks: Array<CardType>, cardPacksTotalCount:number) => ({type: 'App/CardsBlock/PacksKitReducer/GET_PACKS_SUCCESS', cardPacks, cardPacksTotalCount} as const)
};
type PacksKitActionType = InferActionTypes<typeof actions>

type ThunkType = ThunkAction<void, AppStateType, unknown, PacksKitActionType>
export const toGetPacks = (token: string, currentPage: number, pageSize: number): ThunkType =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, PacksKitActionType>, getState: () => AppStateType) => {
        try {
            const response = await packsApi.getPacks(token, currentPage, pageSize)
            dispatch(actions.getPacksSuccess(response.data.cardPacks, response.data.cardPacksTotalCount))
            console.log(response);
        }
        catch (e) {
            console.error(e);
        }
    }


export default packsKitReducer
