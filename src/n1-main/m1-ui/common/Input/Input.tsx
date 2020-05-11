import React, {ChangeEvent} from "react";
import style from './Input.module.css'

type OwnPropsType = {
    placeholder?: string
    type?: string
    value:  string | boolean
    onInputTextChange?: (value: string) => void
    onInputCheckboxChange?: (value: boolean) => void
}
type PropsType = OwnPropsType
const Input: React.FC<PropsType> = (props) => {
    const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.onInputTextChange) {
            props.onInputTextChange(e.currentTarget.value)
        }
    }
    const onCheckboxToggled = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.onInputCheckboxChange) {
            props.onInputCheckboxChange(e.currentTarget.checked)
        }
    }
    if (props.type === 'checkbox') {
        return (
            <div className={style.exp}>
                <div className={style.checkbox}>
                    <div>
                        <input type="checkbox" id="check" name="check" checked={props.value as boolean} onChange={onCheckboxToggled}/>
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
            <input placeholder={props.placeholder} type={props.type} value={props.value as string} onChange={onInputChanged}/>
        </div>
    )
}
export default Input