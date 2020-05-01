import React from "react";
import style from './Button.module.css'

type OwnPropsType = {
    name: string
    onClick: () => void
}
type PropsType = OwnPropsType
const Button: React.FC<PropsType> = (props) => {
    return (
        <div className={style.wrapper} onClick={props.onClick}>
            {props.name}
        </div>
    )
}
export default Button