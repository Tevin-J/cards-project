import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import authReducer from "../../n2-features/f1-auth/authReducer";

const rootReducer = combineReducers({
    authReducer: authReducer
})
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store