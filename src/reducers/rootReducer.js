import {combineReducers} from "redux"
import UserReducer from "./userReducer"
import LoginStatusReducer from "./loginStatus"

export default combineReducers({UserReducer,LoginStatusReducer})