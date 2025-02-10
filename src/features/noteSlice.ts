import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    addNote: (state, action) => { // takes a object
      state.notes.push(action.payload); 
    },
    editNote: (state, action) => { // takes a id and edited object
      const { id, editedNote } = action.payload;
      const index : number = state.notes.findIndex((note) => note.id === id);
      if (index!== -1) {
        state.notes[index] = editedNote;
      }
    },
    deleteNote: (state, action) => { // takes a id
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