import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import { useSelector } from "react-redux";
import { noteState } from "./types";


const App = () => {

  const notes = useSelector((state: {noteStore : noteState}) => state.noteStore.notes);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  return (
    <div className="font-[Roboto] bg-slate-500 min-h-screen ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="/edit-note/:id" element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
