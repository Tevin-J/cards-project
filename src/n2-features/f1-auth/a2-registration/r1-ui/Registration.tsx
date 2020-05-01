import React from "react";
import style from './RegistrationPage.module.css'
import Input from "../../../../n1-main/m1-ui/common/Input/Input";
import MyLink from "../../../../n1-main/m1-ui/common/MyLink/MyLink";
import {SIGN_IN_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";
import Button from "../../../../n1-main/m1-ui/common/Button/Button";

const Registration: React.FC = () => {
    return (
        <div>
        <div className={style.largeText}>
            Registration page
        </div>
            <Input placeholder={'Введите e-mail'} value='' onChange={() => {}}/>
            <Input placeholder={'Введите пароль'} type={'password'} value='' onChange={() => {}}/>
            <Input placeholder={'Введите пароль повторно'} type={'password'} value='' onChange={() => {}}/>
            <Button name={'Регистрация'} onClick={() => {}}/>
            <MyLink to={SIGN_IN_PAGE} text={'sign-in'}/>
        </div>
    )
}
export default Registration