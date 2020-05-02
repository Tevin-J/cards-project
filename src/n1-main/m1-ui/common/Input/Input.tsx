import React, {ChangeEvent} from "react";
import style from './Input.module.css'

type OwnPropsType = {
    placeholder?: string
    type?: string
    value: any
    onChange: any
}
type PropsType = OwnPropsType
const Input: React.FC<PropsType> = (props) => {
    const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    }
    const onCheckboxToggled = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.checked)
    }
    if (props.type === 'checkbox') {
        return (
            <div className={style.exp}>
                <div className={style.checkbox}>
                    <div>
                        <input type="checkbox" id="check" name="check" checked={props.value} onChange={onCheckboxToggled}/>
                        <label htmlFor="check">
                            <span></span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={style.inputStyle}>
            <input placeholder={props.placeholder} type={props.type} value={props.value} onChange={onInputChanged}/>
        </div>
    )
}
export default Input