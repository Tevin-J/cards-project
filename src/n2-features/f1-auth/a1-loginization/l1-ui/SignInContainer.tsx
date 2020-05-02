import React, {useState} from "react";
import SignIn from "./SignIn";

const SignInContainer: React.FC = () => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    return (
        <SignIn login={login} setLogin={setLogin} password={password} setPassword={setPassword}
                rememberMe={rememberMe} setRememberMe={setRememberMe}/>
    )
}
export default SignInContainer