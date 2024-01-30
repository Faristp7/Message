import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    isAuth: false,
  },
  reducers: {
    getUserAuth: (state, action) => {
      return { ...state, isAuth : action.payload };
    },
  },
});

export const { getUserAuth } = userAuthSlice.actions;
export default userAuthSlice.reducer;

export type AuthState = {
  userAuth: {
    isAuth: boolean;
  };
};
