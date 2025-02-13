import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { noteState } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { MdMoreVert } from "react-icons/md";
import { deleteAll } from "../features/noteSlice";

const Notes = () => {
  const notes = useSelector(
    (state: { noteStore: noteState }) => state.noteStore.notes
  );
  const dispatch = useDispatch()

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleSearch = () => {
    const searchedNote = notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
    setFilteredNotes(searchedNote);
  };

  useEffect(handleSearch, [searchQuery]);

  const handleDeleteAll = () => {
    dispatch(deleteAll())
    setShowMore(prev => !prev)  
  }

  // this set filtered Notes dynamically everytime the notes changes do that the ui would be updated instantly
  useEffect(() => {
    setFilteredNotes(notes)
  }, [notes])
  

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="outline-none text-base md:text-xl  shadow-lg shadow-gray-500/30  border-none bg-gray-600/25 rounded-l-xl py-2 px-6 w-[100px] sm:w-[300px] md:w-full focus:shadow-sm focus:shadow-gray-800/20 transition-all"
                placeholder="search notes..."
              />

              <button
                onClick={handleSearch}
                className=" shadow-lg shadow-gray-500/30  border-none bg-gray-600/25 rounded-r-xl py-[6px] md:py-2 px-2 cursor-pointer transition-all  active:shadow-sm active:shadow-gray-800/20"
              >
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
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>

      <div className="fixed bottom-15 right-33 ">
        <button title="Show More"
          onClick={() => setShowMore((prev) => !prev)}
          className="text-white absolute bottom-0  bg-neutral-800/50 h-13 w-13 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-100 hover:shadow-none hover:scale-105 active:shadow-none active:scale-95"
        >
          <MdMoreVert size={26} /> ({notes.length} remaining)
        </button>
        {
          showMore && (
            <div className=" text-white absolute bottom-[54px] -right-13 flex flex-col  w-34 bg-neutral-800/60 items-center justify-center rounded-2xl shadow-lg">
            <Link
              to={"/create-note"}
              className=" text-center w-full py-3 transition-all duration-100  hover:scale-105 active:shadow-none active:scale-95"
            >
              Add Note
            </Link>
  
            <div className="border-1 border-neutral-600 w-full"></div>
  
            <button
            onClick={handleDeleteAll}
            className="text-center w-full py-3 transition-all duration-100  hover:scale-105 active:shadow-none active:scale-95">
              Delete All
            </button>
          </div>
          )
        }


      </div>
    </section>
  );
};

export default Notes;
