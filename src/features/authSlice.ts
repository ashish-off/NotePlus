import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "@/types";

const getStoredUser = (): User | null => {
  const rawUser = localStorage.getItem("notePlusUser");
  if (!rawUser) return null;

  try {
    return JSON.parse(rawUser) as User;
  } catch {
    localStorage.removeItem("notePlusUser");
    return null;
  }
};

const initialState: AuthState = {
  user: getStoredUser(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      localStorage.setItem("notePlusUser", JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.user = null;
      localStorage.removeItem("notePlusUser");
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
