import PacksKit from "./PacksKit";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {toGetPacks} from "../p2-bll/packsKitReducer";

const PacksKitContainer: React.FC = () => {
    const {packsKit} = useSelector((store: AppStateType) => store.cardsReducer.packsKitReducer)
    const {token} = useSelector((store: AppStateType) => store.authReducer.loginReducer)
    const {totalItemsCount} = useSelector((store: AppStateType) => store.cardsReducer.packsKitReducer)
    currentPage pageSize

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(toGetPacks(token, currentPage, pageSize))
    }, [])



    return (
        <PacksKit kit={packsKit} totalItemsCount={totalItemsCount}/>
    )
}
export default PacksKitContainer