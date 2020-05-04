import {combineReducers} from "redux";
import loginReducer from "./a1-loginization/l2-bll/loginReducer";
import registrationReducer from "./a2-registration/r2-bll/registrationReducer";
import recoveryPassReducer from "./a3-recovery/r2-bll/recoveryPassReducer";
import newPassReducer from "./a4-newPass/n2-bll/newPassReducer";
import profileReducer from "./a5-profile/p2-bll/profileReducer";

const authReducer = combineReducers({
    loginReducer: loginReducer,
    registrationReducer: registrationReducer,
    recoveryPassReducer: recoveryPassReducer,
    newPassReducer: newPassReducer,
    profileReducer: profileReducer
})
export default authReducer