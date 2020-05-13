import axios from 'axios'

type RecoveryResponseType = {
    success: boolean
    error: string
}

const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0"
})

export const recoveryApi = {
    forgot(email: string, html1: string, html2: string) {
        return (
            instance.post<RecoveryResponseType>("/auth/forgot",
                {
                    email: email,
                    html1: html1,
                    html2: html2
                }
            )
        )
    }
};