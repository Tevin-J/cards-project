import axios from 'axios'


type RecoveryResponseType = {
    success: boolean
    error: string
}

const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/"
})
export const recoveryApi = {
    forgot(email: string) {
        return (
            instance.post<RecoveryResponseType>("forgot",
                {
                    email: email,
                    html1: "<a href='http://localhost:3000/#/reset-password/",
                    html2: "'>reset-password-link</a>"
                }
            )
        )
    }
};