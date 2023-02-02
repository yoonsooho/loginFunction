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
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    },
  },
});

export let { loginUser, logoutuser } = user.actions;

export { user };
