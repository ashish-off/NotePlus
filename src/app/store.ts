import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../features/noteSlice";
const store = configureStore({
  reducer: {
    noteStore: noteReducer,
  },
});

export default store;
