import React from "react";
import style from './SigninPage.module.css'
import Button from "../../../../n1-main/m1-ui/common/Button/Button";
import Input from "../../../../n1-main/m1-ui/common/Input/Input";
import MyLink from "../../../../n1-main/m1-ui/common/MyLink/MyLink";
import {RECOVERY_PAGE, REGISTRATION_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";

const SignInPage: React.FC = () => {
    return (
        <div>
            <div className={style.largeText}>
                Sign-in page
            </div>
            <Input placeholder={'Введите логин'}/>
            <Input placeholder={'Введите пароль'} type={'password'}/>
            <div className={style.linkInPageWrapper}>
                <MyLink to={RECOVERY_PAGE} text={'Забыли пароль?'}/>
            </div>
            <div className={style.checkboxBlockWrapper}>
                <div className={style.smallText}>
                    Запомнить меня
                </div>
                <Input type={'checkbox'}/>
            </div>
            <Button name={'войти'}/>
            <div className={style.linkInPageWrapper}>
                <MyLink to={REGISTRATION_PAGE} text={'Зарегистрироваться'}/>
            </div>
        </div>
    )
}
export default SignInPage