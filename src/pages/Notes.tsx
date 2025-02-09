import React from "react";
import { IoMdSearch } from "react-icons/io";
import dummyNotes from "../data/dummyNotes";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { notesType } from "../types";

const Notes = () => {
  return (
    <section>
      <header className="border-b-2 border-gray-500 shadow-lg">
        <div className="flex items-center justify-between py-3 px-20">
          <Link to={"/"} className="text-4xl font-bold font-mono relative">
            Note <span className="absolute bottom-[13px] -right-3 text-2xl text-red-500 ">+</span>
          </Link>

          <div className="w-sm flex items-center relative ">
            <input
              type="text"
              className="outline-none text-xl shadow-lg shadow-gray-500/30  border-none bg-gray-600/25 rounded-xl py-2 px-6 w-full focus:shadow-sm focus:shadow-gray-800/20 transition-all"
              autoFocus
              placeholder="search notes..."
            />

            <button className="absolute right-4 cursor-pointer  active:scale-90">
              <IoMdSearch size={28} />
            </button>
          </div>
        </div>
      </header>

      <div className="px-20 grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {
           dummyNotes.map((note => <NoteItem key={note.id} note={note} />)) 
        }
      </div>
      <Link to={"/create-note"} className="btn add__btn">
        {" "}
        <BsPlusLg />{" "}
      </Link>
    </section>
  );
};

export default Notes;
