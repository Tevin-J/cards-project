import React from "react";
import style from './Input.module.css'

type OwnPropsType = {
    placeholder?: string
    type?: string
}
type PropsType = OwnPropsType
const Input: React.FC<PropsType> = (props) => {
    if (props.type === 'checkbox') {
        return (
            <input type="checkbox"/>
        )
    }
    return (
        <div className={style.inputStyle}>
            <input placeholder={props.placeholder} type={props.type}/>
        </div>
    )
}
export default Input