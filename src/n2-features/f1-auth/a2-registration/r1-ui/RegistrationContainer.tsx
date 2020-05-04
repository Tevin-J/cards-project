import React, {useState} from "react";
import Registration from "./Registration";
import {useDispatch, useSelector} from "react-redux";
import { toRegister } from "../r2-bll/registrationReducer";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {SIGN_IN_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";
import { Redirect } from "react-router-dom";



const RegistrationContainer: React.FC = () => {
    const [email, enterEmail] = useState<string>('')
    const [password, enterPassword] = useState<string>('')

    const dispatch = useDispatch()

    const addUser = () => {
        dispatch(toRegister(email, password))
        enterEmail('')
        enterPassword('')
    }

    const {isSuccess} = useSelector((store: AppStateType) => store.authReducer.registrationReducer);

    if (isSuccess) {
       return <Redirect to={SIGN_IN_PAGE}/>
    }
    return (
        <Registration email={email} enterEmail={enterEmail} password={password} enterPassword={enterPassword} addUser={addUser}/>
    );


}
export default RegistrationContainer