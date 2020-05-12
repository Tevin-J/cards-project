import {combineReducers} from "redux";
import packsKitReducer from "./c1-packsKit/p2-bll/packsKitReducer";

const cardsReducer = combineReducers({
    packsKitReducer: packsKitReducer
})
export default cardsReducer