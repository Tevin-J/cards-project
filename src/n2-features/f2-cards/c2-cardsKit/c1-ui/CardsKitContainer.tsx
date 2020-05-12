import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import CardsKit from "./CardsKit";

const CardsKitContainer: React.FC = () => {
    const {cardsKit} = useSelector((store: AppStateType) => store.cardsReducer.cardsKitReducer)
    return (
        <CardsKit kit={cardsKit}/>
    )
}
export default CardsKitContainer