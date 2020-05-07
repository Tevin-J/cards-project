import React from "react";
import style from './RecoveryPasswordPage.module.css';
import Input from "../../../../n1-main/m1-ui/common/Input/Input";
import Button from "../../../../n1-main/m1-ui/common/Button/Button";
import {SIGN_IN_PAGE, NEW_PASSWORD_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";
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
            <div className={style.spinner}>
                {props.isLoading ? <img src={spinner} alt='spinner'/> : ''}
            </div>
            {props.isError && (props.email === '') ? <div className={style.errorText}>Указанный адрес не найден</div> : null}
            <div>
                <Input placeholder={'Введите e-mail'} type={'text'}
                       onChange={props.enterEmail}
                       value={props.email} />
                <Button name={'Отправить'} onClick={props.recoveryPass}
                        disabled={props.isLoading}/>
                <MyLink to={SIGN_IN_PAGE} text={'Регистрация'}/>
            </div>
        </div>
    )
}
export default RecoveryPassword