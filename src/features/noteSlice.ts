import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { noteState, notesType } from "../types";


const initialState : noteState = {
  notes: []
}

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // takes a object
    addNote: (state, action: PayloadAction<notesType>) => { 
      state.notes.push(action.payload); 
    },
      // takes a id and edited object
    editNote: (state, action: PayloadAction<{id : string; editedNote : notesType}>) => { 
      const { id, editedNote } = action.payload;
      const index  = state.notes.findIndex((note) => note.id === id);
      if (index!== -1) {
        state.notes[index] = editedNote;
      }

    },
    // takes a id
    deleteNote: (state, action: PayloadAction<{id: string}>) => { 
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