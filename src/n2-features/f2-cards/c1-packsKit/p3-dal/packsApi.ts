import axios from 'axios'

type GetPacksResponseType = {
    cardPacks: Array<CardType>
    cardPacksTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}
export type CardType = {
    _id: string
    _v: number
    user_id: string
    name: string
    path: string
    grade: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
}
type AddPackResponseType = {
    newCardsPack: CardsPackType
    success: boolean
    token: string
    tokenDeathTime: number
}
type CardsPackType = {
    user_id: string
    name: string
    path: string
    grade: number
    shots: number
    rating: number
    type: string
}
const instance = axios.create({
    baseURL: `https://cards-nya-back.herokuapp.com/1.0/`
})
export const packsApi = {
    getPacks(token: string) {
        return (
            instance.get<GetPacksResponseType>(`/cards/pack?token=${token}`)
        )
    },
    addPack(cardsPack: CardsPackType, token: string) {
        return (
            instance.post<AddPackResponseType>(`/cards/pack`,
                {
                    cardsPack: cardsPack,
                    token: token
                }
            )
        )
    }
}