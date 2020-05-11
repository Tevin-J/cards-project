import React from "react";
import style from './NewPasswordPage.module.css'
import Input from "../../../../n1-main/m1-ui/common/Input/Input";
import Button from "../../../../n1-main/m1-ui/common/Button/Button";
import MyLink from "../../../../n1-main/m1-ui/common/MyLink/MyLink";
import {SIGN_IN_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";
import spinner from "../../../../n1-main/m1-ui/common/assets/spinner.gif";

type OwnPropsType = {
    password: string
    setPassword: (text: string) => void
    passwordRepeat: string
    setPasswordRepeat: (text: string) => void
    samePassword: boolean
    setNewPassword: () => void
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
}
type PropsType = OwnPropsType

const NewPassword: React.FC<PropsType> = (props) => {

    const onSetNewPassClick = () => {
        props.setNewPassword()
    }

    return (
        <div>
            <div className={style.largeText}>
                New password page
            </div>
            <div className={style.statusWrapper}>
                {props.isLoading ? <img src={spinner} alt='spinner'/>
                    : props.isError && props.passwordRepeat === '' && props.password === ''
                        ? <div className={style.textError}><p>Произошла ошибка</p></div>
                        : null}
            </div>
            <Input placeholder={'Введите пароль'} type={'password'} value={props.password}
                   onInputTextChange={props.setPassword}/>
            <Input placeholder={'Введите пароль повторно'} type={'password'} value={props.passwordRepeat}
                   onInputTextChange={props.setPasswordRepeat}/>
            {!props.samePassword && <div className={style.textError}>Пароли не совпадают</div>}
            <Button name={'Регистрация'} onClick={onSetNewPassClick} disabled={props.isLoading}/>
            <MyLink to={SIGN_IN_PAGE} text={'Перейти к логинизации'}/>
        </div>
    )
}
export default NewPassword