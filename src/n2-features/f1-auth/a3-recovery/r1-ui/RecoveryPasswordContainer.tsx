import React, {useState} from "react";
import RecoveryPassword from "./RecoveryPassword";
import {useDispatch, useSelector} from "react-redux";
import { toRecoveryPass } from "../r2-bll/recoveryPassReducer";
import {AppStateType} from "../../../../n1-main/m2-bll/store";
import {Redirect} from "react-router-dom";
import {NEW_PASSWORD_PAGE} from "../../../../n1-main/m1-ui/routes/Routes";

const RecoveryPasswordContainer: React.FC = () => {

    const [email, enterEmail] = useState<string>('');

    const dispatch = useDispatch();

    const recoveryPass = () => {
        dispatch(toRecoveryPass(email))
        enterEmail("")
    };

    const {isLoading, isSuccess, isError} = useSelector
    ((store: AppStateType) => store.authReducer.recoveryPassReducer);

    if (isSuccess) {
        return <Redirect to={NEW_PASSWORD_PAGE}/>
    }

    return (
        <RecoveryPassword email={email} enterEmail={enterEmail}
                          recoveryPass={recoveryPass}
                          isLoading={isLoading} isSuccess={isSuccess} isError={isError}/>
    )
};

export default RecoveryPasswordContainer