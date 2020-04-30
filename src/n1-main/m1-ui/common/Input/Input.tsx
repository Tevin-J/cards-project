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
            <div className={style.exp}>
                <div className={style.checkbox}>
                    <form>
                        <div>
                            <input type="checkbox" id="check" name="check" value=""/>
                            <label htmlFor="check">
                                <span></span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <div className={style.inputStyle}>
            <input placeholder={props.placeholder} type={props.type}/>
        </div>
    )
}
export default Input