import Table from "../../../../n1-main/m1-ui/common/Table/Table";
import React from "react";
import {PacksKitType} from "../p2-bll/packsKitReducer";

type OwnPropsType = {
    packs: PacksKitType
}
type PropsType = OwnPropsType

const PacksKit: React.FC<PropsType> = (props) => {
    return (
        <Table {...props}/>
    )
}
export default PacksKit
