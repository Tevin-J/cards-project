import React from "react";
import style from './SigninPage.module.css'
import Button from "../../../../n1-main/m1-ui/common/Button/Button";
import Input from "../../../../n1-main/m1-ui/common/Input/Input";
import MyLink from "../../../../n1-main/m1-ui/common/MyLink/MyLink";
import {RECOVERY_PAGE, REGISTRATION_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";

type OwnProps = {
    email: string
    setEmail: (text: string) => void
    password: string
    setPassword: (text: string) => void
    rememberMe: boolean
    setRememberMe: (value: boolean) => void
    setUser: () => void
    isLoading: boolean
}
type PropsType = OwnProps
const SignIn: React.FC<PropsType> = (props) => {
    const onLoginClick = () => {
        props.setUser()
    }
    /*show preloader during api request is going on*/
    if (props.isLoading) {
        return (
            <div className={style.largeText}>Loading...</div>
        )
    }
    return (
        <div>
            <div className={style.largeText}>
                Sign-in page
            </div>
            <Input placeholder={'Введите e-mail'} value={props.email} onChange={props.setEmail}/>
            <Input placeholder={'Введите пароль'} type={'password'} value={props.password} onChange={props.setPassword}/>
            <MyLink to={RECOVERY_PAGE} text={'Забыли пароль?'}/>
            <div className={style.checkboxBlockWrapper}>
                <div className={style.smallText}>
                    Запомнить меня
                </div>
                <Input type={'checkbox'} value={props.rememberMe} onChange={props.setRememberMe}/>
            </div>
            <Button name={'войти'} onClick={onLoginClick}/>
            <MyLink to={REGISTRATION_PAGE} text={'Зарегистрироваться'}/>
        </div>
    )
}
export default SignIn