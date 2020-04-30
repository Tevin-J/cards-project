import React from "react";
import style from './Header.module.css'
import {
    BUTTON_PATH,
    INPUT_PATH,
    NEW_PASSWORD_PAGE, PROFILE_PAGE,
    RECOVERY_PAGE,
    REGISTRATION_PAGE, SIGN_IN_PAGE
} from "../routes/Routes";
import MyLink from "../common/MyLink/MyLink";

const Header: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <MyLink to={BUTTON_PATH} text={'button'}/>
            <MyLink to={INPUT_PATH} text={'input'}/>
            <MyLink to={SIGN_IN_PAGE} text={'sign-in'}/>
            <MyLink to={REGISTRATION_PAGE} text={'registration'}/>
            <MyLink to={NEW_PASSWORD_PAGE} text={'new password'}/>
            <MyLink to={RECOVERY_PAGE} text={'recovery password'}/>
            <MyLink to={PROFILE_PAGE} text={'profile'}/>
        </div>
    )
}
export default Header