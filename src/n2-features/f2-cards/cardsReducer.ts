import {combineReducers} from "redux";
import packsKitReducer from "./c1-packsKit/p2-bll/packsKitReducer";
import cardsKitReducer from "./c2-cardsKit/c2-bll/cardsKitReducer";

const cardsReducer = combineReducers({
    packsKitReducer: packsKitReducer,
    cardsKitReducer: cardsKitReducer
})
export default cardsReducer