import React, {useState} from "react";
import Registration from "./Registration";


const RegistrationContainer: React.FC = () => {
    const [email, enterEmail] = useState<string>('meow')
    const [password, enterPassword] = useState<string>('900')

    return (
        <Registration email={email} enterEmail={enterEmail} password={password} enterPassword={enterPassword}/>
    )
}
export default RegistrationContainer