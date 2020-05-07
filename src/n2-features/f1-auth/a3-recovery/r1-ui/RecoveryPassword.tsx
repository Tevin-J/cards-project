import React from "react";
import style from './RecoveryPasswordPage.module.css';
import Input from "../../../../n1-main/m1-ui/common/Input/Input";
import Button from "../../../../n1-main/m1-ui/common/Button/Button";
import {SIGN_IN_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";
import MyLink from "../../../../n1-main/m1-ui/common/MyLink/MyLink";
import spinner from "../../../../n1-main/m1-ui/common/assets/spinner.gif";

type OwnProps = {
    email: string
    enterEmail: (text: string) => void
    recoveryPass: () => void
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
}
type PropsType = OwnProps

const RecoveryPassword: React.FC<PropsType> = (props) => {

    return (
        <div>
            <div className={style.largeText}>
                Recovery password page
            </div>
            <div className={style.statusWrapper}>
                {props.isLoading ? <img src={spinner} alt='spinner'/>
                    : props.isError && props.email === ''
                        ? <div className={style.textError}><p>Произошла ошибка</p></div>
                        : null}
            </div>
            <Input placeholder={'Введите e-mail'} type={'text'}
                   onChange={props.enterEmail}
                   value={props.email}/>
            <Button name={'Отправить'} onClick={props.recoveryPass}
                    disabled={props.isLoading}/>
            <MyLink to={SIGN_IN_PAGE} text={'Перейти к логинизации'}/>
        </div>
    )
}
export default RecoveryPassword