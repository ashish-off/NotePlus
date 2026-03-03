import { createSlice } from "@reduxjs/toolkit/react";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: localStorage.getItem("name") || null,
    isAuthinticated: !!localStorage.getItem("token"),
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload;
      state.isAuthinticated = true;
      localStorage.setItem("name", action.payload);
    },
    clearUser: (state) => {
      state.name = null;
      state.isAuthinticated = false;
      localStorage.removeItem("name");
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
