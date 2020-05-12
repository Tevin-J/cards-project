import React from 'react';
import style from './Table.module.css'
import {PacksKitType} from "../../../../n2-features/f2-cards/c1-packsKit/p2-bll/packsKitReducer";

type OwnPropsType = {
    packs: PacksKitType
}
type PropsType = OwnPropsType
const Table: React.FC<PropsType> = (props) => {
    const lengthOfKit = Object.keys(props.packs[0]).length
    return (
        <div className={style.tableWrapper}>
            <table>
                <thead>
                <tr style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${lengthOfKit}, 1fr)`
                }} className={style.tableHead}>
                    {Object.keys(props.packs[0]).map(key => <th>{key}</th>)}
                </tr>
                </thead>
                <tbody>
                {props.packs.map(p => {
                    return (
                        <tr style={{
                            display: "grid",
                            gridTemplateColumns: `repeat(${lengthOfKit}, 1fr)`
                        }} className={style.tableRow}>
                            {Object.values(p).map(value => <td>{value}</td>)}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;

