import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "@/types";

const initialState: AuthState = {
  name: localStorage.getItem("notePlusUser") || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name;
      localStorage.setItem("notePlusUser", action.payload.name);
    },
    clearUser: (state) => {
      state.name = null;
      localStorage.removeItem("notePlusUser");
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
