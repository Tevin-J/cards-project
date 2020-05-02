import React from "react";
import style from './SigninPage.module.css'
import Button from "../../../../n1-main/m1-ui/common/Button/Button";
import Input from "../../../../n1-main/m1-ui/common/Input/Input";
import MyLink from "../../../../n1-main/m1-ui/common/MyLink/MyLink";
import {RECOVERY_PAGE, REGISTRATION_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";
import {useDispatch} from "react-redux";
import {toLogin} from "../l2-bll/loginReducer";

type OwnProps = {
    email: string
    setEmail: (text: string) => void
    password: string
    setPassword: (text: string) => void
    rememberMe: boolean
    setRememberMe: (value: boolean) => void
}
type PropsType = OwnProps
const SignIn: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const onLoginClick = () => {
        dispatch(toLogin(props.email, props.password, props.rememberMe))
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