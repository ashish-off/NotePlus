import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";

const App = () => {
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
