import React, {useState} from "react";
import SignIn from "./SignIn";

const SignInContainer: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    return (
        <SignIn email={email} setEmail={setEmail} password={password} setPassword={setPassword}
                rememberMe={rememberMe} setRememberMe={setRememberMe}/>
    )
}
export default SignInContainer