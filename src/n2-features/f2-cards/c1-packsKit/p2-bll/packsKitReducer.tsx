import Button from "../../../../n1-main/m1-ui/common/Button/Button";
import React from 'react'

export type PacksKitType = Array<PackType>
type PackType = {
    id: number,
    title: string,
    rating: string,
    button: JSX.Element,
}
type InitialStateType = {
    packsKit: PacksKitType
}
const initialState: InitialStateType = {
    packsKit: [
        {id: 0, title: 'kit 1', rating: '4', button:  <div><Button name={'add'} onClick={()=> {} }/><Button name={'delete'} onClick={()=> {} }/></div>},
        {id: 1, title: 'kit 2', rating: '3', button:  <div><Button name={'add'} onClick={()=> {} }/><Button name={'delete'} onClick={()=> {} }/></div>},
        {id: 2, title: 'kit 2', rating: '5', button:  <div><Button name={'add'} onClick={()=> {} }/><Button name={'delete'} onClick={()=> {} }/></div>},
    ]
}
const packsKitReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    return state
}
export default packsKitReducer
