import Table from "../../../../n1-main/m1-ui/common/Table/Table";
import React from "react";
import {CardsKitType} from "../c2-bll/cardsKitReducer";


type OwnPropsType = {
    kit: CardsKitType
}
type PropsType = OwnPropsType

const CardsKit: React.FC<PropsType> = (props) => {
    return (
        /*<Table {...props}/>*/
        <div>заглушка, пока не сделаю функционал packsKitReducera</div>
    )
}
export default CardsKit
