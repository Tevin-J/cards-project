import React, {useEffect, useState} from "react";
import NewPassword from "./NewPassword";
import {useDispatch, useSelector} from "react-redux";
import {toSetPassword} from "../n2-bll/newPassReducer";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import useReactRouter from 'use-react-router'
import {Redirect} from "react-router";
import {SIGN_IN_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";


const NewPasswordContainer: React.FC = () => {
    const [password, setPassword] = useState<string>('')
    const [passwordRepeat, setPasswordRepeat] = useState<string>('')
    const [samePassword, setSamePassword] = useState<boolean>(false)

    useEffect(()=> {
        if(passwordRepeat === password) setSamePassword(true)
        else setSamePassword(false)
    }, [passwordRepeat])

    /*taking token for change password from url via hook useReactRouter instead of withRouter HOC*/
    const {location} = useReactRouter()
    /*cutting token from url*/
    const token = location.pathname.substr(14)

    const dispatch = useDispatch();
    const setNewPassword = () => {
        dispatch(toSetPassword(password, token));
        setPassword('')
        setPasswordRepeat('')
    };

    const {isLoading, isSuccess, isError} = useSelector((store: AppStateType) => store.authReducer.newPassReducer);

    if (isSuccess) {
        return <Redirect to={SIGN_IN_PAGE}/>
    }

    return (
        <NewPassword password={password} setPassword={setPassword} passwordRepeat={passwordRepeat} setPasswordRepeat={setPasswordRepeat}
                     samePassword={samePassword} setNewPassword={setNewPassword} isLoading={isLoading} isSuccess={isSuccess} isError={isError}/>
    )
}
export default NewPasswordContainer