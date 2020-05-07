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
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/"
})

export const registerApi = {
    register(email: string, password: string) {
        return (
            instance.post<RegisterResponseType>("register",
                {
                    email: email,
                    password: password
                }
            )
        )
    }
};