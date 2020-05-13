import axios from 'axios'

type NewPassResponseType = {
    success: boolean
} | {
    error: string
}
const instance = axios.create({
    baseURL: `https://cards-nya-back.herokuapp.com/1.0`
})
export const newPassApi = {
    setNewPass(password: string, resetPasswordToken: string) {
        return (
            instance.post<NewPassResponseType>(`/auth/set-new-password`,
                {
                    password: password,
                    resetPasswordToken: resetPasswordToken
                }
            )
        )
    }
}