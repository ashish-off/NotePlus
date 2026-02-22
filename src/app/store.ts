import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../features/noteSlice";
import { noteApi } from "@/features/notesApi";
const store = configureStore({
  reducer: {
    noteStore: noteReducer,
    [noteApi.reducerPath]: noteApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(noteApi.middleware),
});

export default store;
