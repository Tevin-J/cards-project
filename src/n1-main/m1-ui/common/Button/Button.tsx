import React from "react";
import style from './Button.module.css'

type OwnPropsType = {
    name: string
    onClick: () => void
    disabled?: boolean
}
type PropsType = OwnPropsType
const Button: React.FC<PropsType> = (props) => {
    /*classes for disabled button*/
    const classForButton = props.disabled ? `${style.wrapper} ${style.disabled}` : `${style.wrapper}`
    return (
        <div className={classForButton} onClick={props.onClick}>
            {props.name}
        </div>
    )
}
export default Button