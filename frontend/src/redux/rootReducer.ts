import { combineReducers } from "@reduxjs/toolkit";
import userInfo from "./user/userInfo";
import userAuth from "./user/userAuth";

const rootReducer = combineReducers({
  userInformation: userInfo,
  userAuth : userAuth
});

export default rootReducer;