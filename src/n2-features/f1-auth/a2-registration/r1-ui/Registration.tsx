import React from "react";
import style from './RegistrationPage.module.css'
import Input from "../../../../n1-main/m1-ui/common/Input/Input";
import MyLink from "../../../../n1-main/m1-ui/common/MyLink/MyLink";
import {SIGN_IN_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";
import Button from "../../../../n1-main/m1-ui/common/Button/Button";
import {useDispatch} from "react-redux";
import { toRegister } from "../r2-bll/regReducer";

type OwnProps = {
    email: string
    enterEmail: (text: string) => void
    password: string
    enterPassword: (text: string) => void

}
type PropsType = OwnProps
const Registration: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()
    const onRegisterClick = () => {
        dispatch(toRegister(props.email, props.password))
    }
    return (
        <div>
        <div className={style.largeText}>
            Registration page
        </div>
            <Input placeholder={'Введите e-mail'} value={props.email} onChange={props.enterEmail}/>
            <Input placeholder={'Введите пароль'} type={'password'} value={props.password} onChange={props.enterPassword}/>
            <Input placeholder={'Введите пароль повторно'} type={'password'} value={props.password} onChange={props.enterPassword}/>
            <Button name={'Регистрация'} onClick={onRegisterClick}/>
            <MyLink to={SIGN_IN_PAGE} text={'sign-in'}/>
        </div>
    )
}
export default Registration