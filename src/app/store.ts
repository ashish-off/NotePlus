import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../features/noteSlice";
import { noteApi } from "@/features/notesApi";
import authReducer from "@/features/authSlice";
import { authApi } from "@/features/authApi";

const store = configureStore({
  reducer: {
    noteStore: noteReducer,
    authStore: authReducer,
    [noteApi.reducerPath]: noteApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteApi.middleware, authApi.middleware),
});

// Export RootState type for typed selectors
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
