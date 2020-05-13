import axios from 'axios'

type RegisterResponseType = {
    addedUser: {
        email: string
        isAdmin: boolean
        __v: number
        _id: string
    }
    success: boolean,
    error: string
}

const instance = axios.create({
    baseURL: "https://cards-nya-back.herokuapp.com/1.0"
})

export const registerApi = {
    register(email: string, password: string) {
        return (
            instance.post<RegisterResponseType>("/auth/register",
                {
                    email: email,
                    password: password
                }
            )
        )
    }
};