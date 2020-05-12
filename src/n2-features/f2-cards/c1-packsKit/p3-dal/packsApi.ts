import axios from 'axios'

type GetPacksResponseType = {
    _id: string
    name: string
    path: string
    grade: number
    rating: number
    token: string
}
const instance = axios.create({
    baseURL: `https://cards-nya-back.herokuapp.com/1.0/`
})
export const packsApi = {
    getPacks(packName: string, token: string) {
        return (
            instance.get<GetPacksResponseType>(`/cards/pack`)
        )
    }
}