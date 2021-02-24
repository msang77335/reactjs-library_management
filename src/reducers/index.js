import { combineReducers } from "redux";
import { userReducer } from "./userReducers";

const allReducers = combineReducers({ userReducer });

export default allReducers;
