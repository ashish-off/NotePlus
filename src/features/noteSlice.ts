import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    editNote: (state, action) => {
      const { id, editedNote } = action.payload;
      const index = state.notes.findIndex((note) => note.id === id);
      if (index!== -1) {
        state.notes[index] = editedNote;
      }
    },
    deleteNote: (state, action) => {
      const { id } = action.payload;
      const index = state.notes.findIndex((note) => note.id === id);
      if (index!== -1) {
        state.notes.splice(index, 1);
      }
    },
  },
})

export const { addNote, editNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;