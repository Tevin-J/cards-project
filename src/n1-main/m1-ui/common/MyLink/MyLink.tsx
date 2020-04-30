import React from "react";
import {NavLink} from "react-router-dom";
import style from './MyLink.module.css'

type OwnPropsType = {
    to: string
    text: string
}
type PropsType = OwnPropsType
const MyLink: React.FC<PropsType> = (props) => {
    return (
        <span className={style.linkInHeaderWrapper}>
            <NavLink to={props.to}>{props.text}</NavLink>
        </span>
    )
}
export default MyLink