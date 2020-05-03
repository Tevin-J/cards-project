import React, {useState} from "react";
import SignIn from "./SignIn";
import {useDispatch, useSelector} from "react-redux";
import {toLogin} from "../l2-bll/loginReducer";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {PROFILE_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";
import { Redirect } from "react-router-dom";

const SignInContainer: React.FC = () => {
    /*hooks for local SignIn state*/
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    /*used hook useDispatch instead of MDTP func*/
    const dispatch = useDispatch()
    /*func which dispatches thunk into store and then cleans inputs*/
    const setUser = () => {
        dispatch(toLogin(email, password, rememberMe))
        setEmail('')
        setPassword('')
        setRememberMe(false)
    }
    /*used hook useSelector instead of MSTP func*/
    const {isLoading, isSuccess} = useSelector((store: AppStateType) => store.authReducer.loginReducer)
    /*if request for login is succeed, redirect is going on to profilePage*/
    if (isSuccess) {
        return <Redirect to={PROFILE_PAGE}/>
    }
    return (
        <SignIn email={email} setEmail={setEmail} password={password} setPassword={setPassword}
                rememberMe={rememberMe} setRememberMe={setRememberMe} setUser={setUser} isLoading={isLoading}/>
    )
}
export default SignInContainer