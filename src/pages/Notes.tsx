import React from "react";
import { IoMdSearch } from "react-icons/io";
import dummyNotes from "../data/dummyNotes";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

const Notes = () => {
  return (
    <section>
      <header className="border-b-2 border-gray-500 shadow-lg">
        <div className="flex items-center justify-between py-3 px-4 sm:px-12 md:px-20">
          <Link to={"/"} className="text-4xl font-bold font-mono relative">
            Note{" "}
            <span className="absolute bottom-[13px] -right-3 text-2xl text-red-500 ">
              +
            </span>
          </Link>

          <div className="w-fit flex items-center gap-4 sm:gap-12 ">
            <div className="w-fit flex items-center relative ">
              <input
                type="text"
                className="outline-none text-xl shadow-lg shadow-gray-500/30  border-none bg-gray-600/25 rounded-xl py-2 px-6 w-[100px] sm:w-[300px] md:w-full focus:shadow-sm focus:shadow-gray-800/20 transition-all"
                autoFocus
                placeholder="search notes..."
              />

              <button className=" cursor-pointer  active:scale-90">
                <IoMdSearch size={28} />
              </button>
            </div>

            <Link to={"/create-note"} className="bg-neutral-800/15 h-13 w-13 flex items-center justify-center rounded-2xl shadow-lg hover:shadow-none active:shadow-none active:scale-95 transition-all duration-100 hover">
            <FaPlus size={26}/>
            </Link>
          </div>
        </div>
      </header>

      <div className="px-20 grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {dummyNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>

      <Link to={"/create-note"} className="fixed bottom-12 right-12 bg-neutral-800/50 h-13 w-13 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-100 hover:shadow-none hover:scale-105 active:shadow-none active:scale-95">
            <FaPlus size={26}/>
            </Link>

    </section>
  );
};

export default Notes;
