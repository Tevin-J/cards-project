import React from "react";
import style from './RecoveryPasswordPage.module.css';
import Input from "../../../../n1-main/m1-ui/common/Input/Input";
import Button from "../../../../n1-main/m1-ui/common/Button/Button";
import {RECOVERY_PAGE, SIGN_IN_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";
import MyLink from "../../../../n1-main/m1-ui/common/MyLink/MyLink";


const RecoveryPassword: React.FC = () => {
    return (
        <div>
            <div className={style.largeText}>
                Recovery password page
            </div>
            <div>
                <Input placeholder={'Введите e-mail'} type={'text'} onChange={() => {
                }} value={''}/>
                <Button name={'Отправить'} onClick={() => {
                }}/>
                <MyLink to={SIGN_IN_PAGE} text={'Регистрация'}/>
            </div>
        </div>
    )
}
export default RecoveryPassword