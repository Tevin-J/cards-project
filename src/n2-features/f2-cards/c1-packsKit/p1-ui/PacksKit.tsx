import Table from "../../../../n1-main/m1-ui/common/Table/Table";
import React from "react";
import {PacksKitType} from "../p2-bll/packsKitReducer";
import Pagination from "../../../../n1-main/m1-ui/common/Pagination/Pagination";

type OwnPropsType = {
    kit: PacksKitType
    totalItemsCount: number
}
type PropsType = OwnPropsType

const PacksKit: React.FC<PropsType> = (props) => {
    return<div>
        <Table {...props}/>
        <Pagination blockSize={3} currentPage={1} onPageChanged={() => {}} pageSize={6} totalItemsCount={props.totalItemsCount}/>
        </div>
};

export default PacksKit
