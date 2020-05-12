import PacksKit from "./PacksKit";
import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../n1-main/m2-bll/store";

const PacksKitContainer: React.FC = () => {
    const {packsKit} = useSelector((store: AppStateType) => store.cardsReducer.packsKitReducer)
    return (
        <PacksKit kit={packsKit}/>
    )
}
export default PacksKitContainer