import axios from 'axios'

type LoginResponseType = {
    email: string
    name: string
    isAdmin: boolean
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    __v: number
    _id: string
    success: boolean
    error: string
    in: string
}
const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/auth/`
})
export const loginApi = {
    login(email: string, password: string, rememberMe: boolean) {
        return (
            instance.post<LoginResponseType>(`login`,
                {
                    email: email,
                    password: password,
                    rememberMe: rememberMe
                }
            )
        )
    }
}