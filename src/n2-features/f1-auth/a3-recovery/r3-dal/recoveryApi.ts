import axios from 'axios'

type RecoveryResponseType = {
    success: boolean
    error: string
}

const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/"
})

export const recoveryApi = {
    forgot(email: string, html1: string, html2: string) {
        return (
            instance.post<RecoveryResponseType>("forgot",
                {
                    email: email,
                    html1: html1,
                    html2: html2
                }
            )
        )
    }
};