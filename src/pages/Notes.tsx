import { useMemo, useState } from "react";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { notesType } from "../types";
import { MdMoreVert } from "react-icons/md";
import {
  useGetNotesQuery,
  useDeleteAllNotesMutation,
} from "@/features/notesApi";

const Notes = () => {
  const { data, isLoading, isError } = useGetNotesQuery();
  const [deleteAllNotes] = useDeleteAllNotesMutation();

  const notes: notesType[] = useMemo(
    () =>
      data?.data.map((note) => ({
        id: note._id,
        title: note.title,
        details: note.details,
        date: note.dateLabel,
      })) || [],
    [data],
  );

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showMore, setShowMore] = useState<boolean>(false);

  const filteredNotes = useMemo(
    () =>
      searchQuery
        ? notes.filter((note) =>
            note.title.toLowerCase().includes(searchQuery.trim().toLowerCase()),
          )
        : notes,
    [searchQuery, notes],
  );

  const handleDeleteAll = () => {
    deleteAllNotes();
    setShowMore((prev) => !prev);
  };

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
                className="w-25 placeholder:text-amber-50/80 text-white sm:w-50 md:w-full py-2 px-6 outline-none text-base md:text-lg lg:text-xl border-none bg-[#3f3a47] rounded-xl focus:shadow-sm focus:shadow-gray-800/20 transition-all"
                placeholder="Search Notes..."
              />
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

      {isLoading && (
        <div className="text-5xl text-amber-50/50 text-center mt-60">
          Loading notes...
        </div>
      )}
      {isError && (
        <div className="text-5xl text-amber-50/50 text-center mt-60">
          Error loading notes
        </div>
      )}
      {!filteredNotes.length && searchQuery && notes.length && (
        <div className="text-5xl text-amber-50/50 text-center mt-60">
          No notes found
        </div>
      )}
    </section>
  );
};

export default Notes;
