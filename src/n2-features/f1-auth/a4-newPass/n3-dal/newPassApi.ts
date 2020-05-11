import axios from 'axios'

type NewPassResponseType = {
    success: boolean
} | {
    error: string
}
const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/auth/`
})
export const newPassApi = {
    setNewPass(password: string, resetPasswordToken: string) {
        return (
            instance.post<NewPassResponseType>(`set-new-password`,
                {
                    password: password,
                    resetPasswordToken: resetPasswordToken
                }
            )
        )
    }
}