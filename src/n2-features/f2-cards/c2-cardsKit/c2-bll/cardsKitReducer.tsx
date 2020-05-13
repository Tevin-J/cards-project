import Button from "../../../../n1-main/m1-ui/common/Button/Button";
import React from 'react'

export type CardsKitType = Array<CardType>
type CardType = {
    id: number,
    question: string,
    answer: string,
    button: JSX.Element,
}
type InitialStateType = {
    cardsKit: CardsKitType
}
const initialState: InitialStateType = {
    cardsKit: [
        {id: 0, question: 'Вопрос 1', answer: 'Ответ 1', button:  <div><Button name={'add'} onClick={()=> {} }/><Button name={'delete'} onClick={()=> {} }/></div>},
        {id: 1, question: 'Вопрос 2', answer: 'Ответ 2', button:  <div><Button name={'add'} onClick={()=> {} }/><Button name={'delete'} onClick={()=> {} }/></div>},
        {id: 2, question: 'Вопрос 3', answer: 'Ответ 3', button:  <div><Button name={'add'} onClick={()=> {} }/><Button name={'delete'} onClick={()=> {} }/></div>},
    ]
}
const cardsKitReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    return state
}
export default cardsKitReducer
