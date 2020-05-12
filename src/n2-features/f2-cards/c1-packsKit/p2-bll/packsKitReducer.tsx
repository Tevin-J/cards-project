import Button from "../../../../n1-main/m1-ui/common/Button/Button";
import React from 'react'

export type PacksKitType = Array<PackType>
export type PackType = {
    id: number
    name: string
    rating: number
    grade: number
    button: JSX.Element
}
type InitialStateType = {
    packsKit: PacksKitType
}
const initialState: InitialStateType = {
    packsKit: [
        {id: 0, name: 'kit 1', grade: 2, rating: 4, button:  <div><Button name={'add'} onClick={()=> {} }/><Button name={'delete'} onClick={()=> {} }/></div>},
        {id: 1, name: 'kit 2', grade: 5, rating: 3, button:  <div><Button name={'add'} onClick={()=> {} }/><Button name={'delete'} onClick={()=> {} }/></div>},
        {id: 2, name: 'kit 3', grade: 4, rating: 5, button:  <div><Button name={'add'} onClick={()=> {} }/><Button name={'delete'} onClick={()=> {} }/></div>},
    ]
}

const packsKitReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    return state
}
export default packsKitReducer
