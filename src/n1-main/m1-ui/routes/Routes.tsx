import {Route} from "react-router";
import Input from "../common/Input";
import Button from "../common/Button";
import React from "react";
import LoginPage from "../../../n2-features/f1-auth/a1-loginization/l1-ui/LoginPage";
import ProfilePage from "../../../n2-features/f1-auth/a5-profile/p1-ui/ProfilePage";
import RecoveryPage from "../../../n2-features/f1-auth/a3-recovery/r1-ui/RecoveryPage";
import RegistrationPage from "../../../n2-features/f1-auth/a2-registration/r1-ui/RegistrationPage";
import NewPasswordPage from "../../../n2-features/f1-auth/a4-newPass/n1-ui/NewPasswordPage";

export const INPUT_PATH = '/input'
export const BUTTON_PATH = '/button'
export const LOGIN_PAGE = '/login'
export const REGISTRATION_PAGE = '/registration'
export const RECOVERY_PAGE = '/recovery_password'
export const NEW_PASSWORD_PAGE = '/new_password'
export const PROFILE_PAGE = '/profile'

export const Routes: React.FC = () => {
    return (
        <>
            <Route path={INPUT_PATH} render={() => <Input placeholder={'Введите текст'}/>}/>
            <Route path={BUTTON_PATH} render={() => <Button name={'Click me!'}/>}/>

            <Route path={LOGIN_PAGE} render={() => <LoginPage/>}/>
            <Route path={REGISTRATION_PAGE} render={() => <RegistrationPage/>}/>
            <Route path={RECOVERY_PAGE} render={() => <RecoveryPage/>}/>
            <Route path={NEW_PASSWORD_PAGE} render={() => <NewPasswordPage/>}/>
            <Route path={PROFILE_PAGE} render={() => <ProfilePage/>}/>
        </>
    )
}