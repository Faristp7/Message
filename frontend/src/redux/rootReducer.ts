import { combineReducers } from "@reduxjs/toolkit";
import userInfo from "./user/userInfo";

const rootReducer = combineReducers({
  userInformation: userInfo,
});

export default rootReducer;