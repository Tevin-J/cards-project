import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import authReducer from "../../n2-features/f1-auth/authReducer";
import cardsReducer from "../../n2-features/f2-cards/cardsReducer";

const rootReducer = combineReducers({
    authReducer: authReducer,
    cardsReducer: cardsReducer
})
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionTypes<T extends {[key: string]: (...args:any)=> any}> = ReturnType<PropertiesType<T>>

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store