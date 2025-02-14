import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import { useSelector } from "react-redux";
import { noteState } from "./types";

const App = () => {
  const notes = useSelector(
    (state: { noteStore: noteState }) => state.noteStore.notes
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="font-[Roboto] bg-[rgba(8,7,13,0.87)] min-h-screen pb-6">
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
