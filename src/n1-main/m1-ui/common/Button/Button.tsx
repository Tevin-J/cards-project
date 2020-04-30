import React from "react";
import style from './Button.module.css'

type OwnPropsType = {
    name: string
}
type PropsType = OwnPropsType
const Button: React.FC<PropsType> = (props) => {
    return (
        <div className={style.wrapper}>
            {props.name}
        </div>
    )
}
export default Button