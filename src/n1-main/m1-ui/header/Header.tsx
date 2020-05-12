import React from "react";
import style from './Header.module.css'
import {
    CARDS_KIT_PAGE,
    NEW_PASSWORD_PAGE, PACKS_KIT_PAGE, PROFILE_PAGE,
    RECOVERY_PAGE,
    REGISTRATION_PAGE, SIGN_IN_PAGE
} from "../routes/Routes";
import MyLink from "../common/MyLink/MyLink";

const Header: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <span className={style.linkInHeaderWrapper}>
                <MyLink to={SIGN_IN_PAGE} text={'sign-in'}/>
            </span>
            <span className={style.linkInHeaderWrapper}>
                <MyLink to={REGISTRATION_PAGE} text={'registration'}/>
            </span>
            <span className={style.linkInHeaderWrapper}>
                <MyLink to={NEW_PASSWORD_PAGE} text={'new password'}/>
            </span>
            <span className={style.linkInHeaderWrapper}>
                <MyLink to={RECOVERY_PAGE} text={'recovery password'}/>
            </span>
            <span className={style.linkInHeaderWrapper}>
                <MyLink to={PROFILE_PAGE} text={'profile'}/>
            </span>
            <span className={style.linkInHeaderWrapper}>
                <MyLink to={PACKS_KIT_PAGE} text={'packs'}/>
            </span>
            <span className={style.linkInHeaderWrapper}>
                <MyLink to={CARDS_KIT_PAGE} text={'cards'}/>
            </span>
        </div>
    )
};

export default Header