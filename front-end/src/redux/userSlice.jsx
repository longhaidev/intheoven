import { createSlice } from "@reduxjs/toolkit";
import { reduce } from "lodash";

const INITIAL_STATE = {
  account: {
    email: "",
    role: "",
    username: "",
    access_token: "",
    refresh_token: "",
  },
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: INITIAL_STATE,
  reducers: {
    doLogin: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        account: {
          email: action.payload.email,
          role: action.payload.role,
          username: action.payload.username,
          access_token: action.payload.access_token,
          refresh_token: action.payload.refresh_token,
        },
        isAuthenticated: true,
      };
    },
    doLogOut: (state, action) => {
      return {
        ...state,
        account: {
          access_token: "",
          email: "",
          image: "",
          refresh_token: "",
          role: "",
          username: "",
        },
        isAuthenticated: false,
      };
    },
  },
});

export default userSlice.reducer;

export const { doLogin, doLogOut } = userSlice.actions;
