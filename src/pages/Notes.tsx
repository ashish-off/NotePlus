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
  const dispatch = useDispatch();

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
    dispatch(deleteAll());
    setShowMore((prev) => !prev);
  };

  // this set filtered Notes dynamically everytime the notes changes do that the ui would be updated instantly
  useEffect(() => {
    setFilteredNotes(notes);
  }, [notes]);

  return (
    <section>
      <header className="  shadow-2xl">
        <div className="flex items-center justify-between py-2 md:py-3 px-8 sm:px-12 md:px-20">
          <Link
            to={"/"}
            className="text-amber-50/95 text-[32px] sm:text-4xl font-bold font-mono relative"
          >
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
                className="w-[100px] placeholder:text-amber-50/80 text-white sm:w-[200px] md:w-full py-2 px-6 outline-none text-base md:text-lg lg:text-xl border-none bg-[#3f3a47] rounded-l-xl focus:shadow-sm focus:shadow-gray-800/20 transition-all"
                placeholder="search notes..."
              />

              <button
                onClick={handleSearch}
                className="text-amber-50/80 border-none bg-[#3f3a47] rounded-r-xl py-[6px] md:py-2 px-2 cursor-pointer transition-all  active:shadow-sm active:shadow-gray-800/20"
              >
                <IoMdSearch size={28} />
              </button>
            </div>

            <Link
              to={"/create-note"}
              className="text-amber-50/80 bg-[#4f4bbd] h-11 w-11 sm:h-13 sm:w-13 flex items-center justify-center rounded-xl sm:rounded-2xl  transition-all duration-100 hover:scale-102 active:shadow-none active:scale-95"
            >
              <FaPlus size={25} />
            </Link>
          </div>
        </div>
      </header>

      <div className="px-6 mt-6  sm:px-12 md:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>

      <div className="fixed bottom-15 right-19 sm:bottom-15 sm:right-25 md:bottom-15 md:right-33 ">
        <button
          title="Show More"
          onClick={() => setShowMore((prev) => !prev)}
          className="text-white absolute bottom-0  bg-[#4f4bbd] h-13 w-13 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-100 hover:shadow-none hover:scale-102 active:shadow-none active:scale-95"
        >
          <MdMoreVert size={26} />
        </button>
        {showMore && (
          <div className=" text-white bg-[#886e63b7] absolute bottom-[54px] -right-13 flex flex-col  w-34 items-center justify-center rounded-2xl shadow-lg">
            <Link
              to={"/create-note"}
              className=" text-center w-full py-3 transition-all duration-100  hover:scale-105 active:shadow-none active:scale-95"
            >
              Add Note
            </Link>

            <div className="border-1 border-neutral-600 w-full"></div>

            <button
              onClick={handleDeleteAll}
              className="text-center w-full py-3 transition-all duration-100  hover:scale-105 active:shadow-none active:scale-95"
            >
              Delete All
            </button>
          </div>
        )}
      </div>

      { 
      
        !filteredNotes.length &&(
                <div className="text-5xl text-amber-50/50 text-center mt-60">Add Notes </div>
        )
      }

    </section>
  );
};

export default Notes;
