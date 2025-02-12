import React, { FC, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { noteState } from "../types";
import { useSelector } from "react-redux";

const Notes = () => {
  const notes = useSelector(
    (state: { noteStore: noteState }) => state.noteStore.notes
);

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
                className="outline-none text-base md:text-xl  shadow-lg shadow-gray-500/30  border-none bg-gray-600/25 rounded-l-xl py-2 px-6 w-[100px] sm:w-[300px] md:w-full focus:shadow-sm focus:shadow-gray-800/20 transition-all"
                placeholder="search notes..."
              />

              <button className=" shadow-lg shadow-gray-500/30  border-none bg-gray-600/25 rounded-r-xl py-[6px] md:py-2 px-2 cursor-pointer transition-all  active:shadow-sm active:shadow-gray-800/20">
                <IoMdSearch size={28} />
              </button>
            </div>

            <Link
              to={"/create-note"}
              className="bg-neutral-800/15 h-13 w-13 flex items-center justify-center rounded-2xl shadow-lg hover:shadow-none active:shadow-none active:scale-95 transition-all duration-100 hover"
            >
              <FaPlus size={26} />
            </Link>
          </div>
        </div>
      </header>

      <div className="px-20 grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>

      <Link
        to={"/create-note"}
        className="fixed bottom-12 right-12 bg-neutral-800/50 h-13 w-13 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-100 hover:shadow-none hover:scale-105 active:shadow-none active:scale-95"
      >
        <FaPlus size={26} />
      </Link>
    </section>
  );
};

export default Notes;
