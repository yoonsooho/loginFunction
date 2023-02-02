import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token"),
    email: localStorage.getItem("email"),
  },
  reducers: {
    loginUser(state, action) {
      state.token = action.payload.idToken;
      state.email = action.payload.email;
      localStorage.setItem("token", state.token);
      localStorage.setItem("email", state.email);
    },
    logoutuser(state) {
      state.token = null;
      state.email = null;
      localStorage.setItem("token", null);
      localStorage.setItem("email", null);
    },
  },
});

export let { loginUser, logoutuser } = user.actions;

export { user };
