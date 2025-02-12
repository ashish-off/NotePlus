import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { noteState, notesType } from "../types";

const loadFromLocalStorage = (): notesType[] => {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
};

const initialState: noteState = {
  notes: loadFromLocalStorage(),
};

const noteSlice = createSlice({
  name: "createNotes",
  initialState,
  reducers: {
    // takes a object
    addNote: (state, action: PayloadAction<notesType>) => {
      const allNotes = [action.payload, ...state.notes]; // implementing new array at 0th index
      state.notes = allNotes;
    },
    // takes a id and edited object
    editNote: (
      state,
      action: PayloadAction<{ id?: string; editedNote: notesType }>
    ) => {
      const { id, editedNote } = action.payload;
      const filteredNotes = state.notes.filter((note) => note.id !== id);
      state.notes = filteredNotes;  // removes the note to be edited

      const allNotes = [editedNote, ...state.notes]      
      state.notes = allNotes;  // adds the edited note back
    },
    // takes a id
    deleteNote: (state, action: PayloadAction<{ id?: string }>) => {
      const { id } = action.payload;
      const index = state.notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        state.notes.splice(index, 1);
      }
    },
  },
});

export const { addNote, editNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
