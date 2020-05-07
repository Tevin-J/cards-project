import React from "react";
import style from './RegistrationPage.module.css'
import Input from "../../../../n1-main/m1-ui/common/Input/Input";
import MyLink from "../../../../n1-main/m1-ui/common/MyLink/MyLink";
import {SIGN_IN_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";
import Button from "../../../../n1-main/m1-ui/common/Button/Button";
import spinner from "../../../../n1-main/m1-ui/common/assets/spinner.gif";


type OwnProps = {
    email: string
    enterEmail: (text: string) => void
    password: string
    enterPassword: (text: string) => void
    addUser: () => void
    passwordRepeat: string
    enterPasswordRepeat: (text: string) => void
    samePassword: boolean
    isLoading: boolean
    isError: boolean
}

type PropsType = OwnProps
const Registration: React.FC<PropsType> = (props) => {
    const onRegisterClick = () => {
        props.addUser()
    }
    return (
        <div>
        <div className={style.largeText}>
            Registration page
        </div>
            <div className={style.spinner}>
                {props.isLoading ? <img src={spinner} alt='spinner'/> : ''}
            </div>
            {props.isError && props.email === '' && props.password === '' ? <div className={style.textError}>Произошла ошибка</div> : null}
            <Input placeholder={'Введите e-mail'} value={props.email} onChange={props.enterEmail}/>
            <Input placeholder={'Введите пароль'} type={'password'} value={props.password} onChange={props.enterPassword}/>
            <Input placeholder={'Введите пароль повторно'} type={'password'} value={props.passwordRepeat} onChange={props.enterPasswordRepeat}/>
            {!props.samePassword && <div className={style.textError}>Пароли не совпадают</div>}
            <Button name={'Регистрация'} onClick={onRegisterClick} disabled={props.isLoading}/>
            <MyLink to={SIGN_IN_PAGE} text={'sign-in'}/>
        </div>
    )
}
export default Registration