import React from "react";
import style from './SigninPage.module.css'
import Button from "../../../../n1-main/m1-ui/common/Button/Button";
import Input from "../../../../n1-main/m1-ui/common/Input/Input";
import MyLink from "../../../../n1-main/m1-ui/common/MyLink/MyLink";
import {RECOVERY_PAGE, REGISTRATION_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";
import spinner from '../../../../n1-main/m1-ui/common/assets/spinner.gif'

type OwnProps = {
    email: string
    setEmail: (value: string) => void
    password: string
    setPassword: (value: string) => void
    rememberMe: boolean
    setRememberMe: (value: boolean) => void
    setUser: () => void
    isLoading: boolean
    isError: boolean
}
type PropsType = OwnProps
const SignIn: React.FC<PropsType> = (props) => {
    const onLoginClick = () => {
        props.setUser()
    }
    return (
        <div>
            <div className={style.largeText}>
                Sign-in page
            </div>
            <div className={style.statusWrapper}>
                {props.isLoading ? <img src={spinner} alt='spinner'/>
                    : props.isError && props.email === '' && props.password === ''
                        ? <div className={style.textError}><p>Произошла ошибка</p></div>
                        : null}
            </div>
            <Input placeholder={'Введите e-mail'} value={props.email} onInputTextChange={props.setEmail}/>
            <Input placeholder={'Введите пароль'} type={'password'} value={props.password} onInputTextChange={props.setPassword}/>
            <MyLink to={RECOVERY_PAGE} text={'Забыли пароль?'}/>
            <div className={style.checkboxBlockWrapper}>
                <div className={style.smallText}>
                    Запомнить меня
                </div>
                <Input type={'checkbox'} value={props.rememberMe} onInputCheckboxChange={props.setRememberMe}/>
            </div>
            <Button name={'войти'} onClick={onLoginClick} disabled={props.isLoading}/>
            <MyLink to={REGISTRATION_PAGE} text={'У меня еще нет аккаунта'}/>
        </div>
    )
}
export default SignIn