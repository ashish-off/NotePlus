import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdArrowBackIos, MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { noteState, notesType } from "../types";
import formattedDate from "../hooks/UseformattedDate";
import { deleteNote, editNote } from "../features/noteSlice";

const EditNote = () => {
  const { id } = useParams();
  const notes = useSelector(
    (state: { noteStore: noteState }) => state.noteStore.notes
  );
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState<string | undefined>(note?.title);
  const [details, setdetails] = useState<string | undefined>(note?.details);

  const handleForm = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (title && details) {
      const editedNote = {
        ...note,
        title,
        details,
        date: formattedDate,
      };

      dispatch(editNote({ id, editedNote }));
      nevigate("/");
    }
  };

  const handleDelete = () => {
    dispatch(deleteNote({ id }));
    nevigate("/");
  };

  return (
    <section className="w-full sm:w-md mx-auto py-1 px-4 sm:px-0">
      <main className="bg-gray-900/20 my-8 shadow-2xl rounded-4xl">
        <header className="flex justify-between items-center py-4 px-4">
          <Link
            to={"/"}
            className="bg-neutral-800/15 h-13 w-13 flex items-center justify-center rounded-2xl shadow-lg hover:shadow-none active:shadow-none active:scale-95 transition-all duration-150 hover"
          >
            <MdArrowBackIos size={28} />{" "}
          </Link>
          <button
            onClick={handleForm}
            className="bg-neutral-800/15 h-13 w-13 flex items-center justify-center rounded-2xl shadow-lg hover:shadow-none active:shadow-none active:scale-95 transition-all duration-150"
          >
            <IoMdCheckmark size={32} />
          </button>

          <button
            onClick={handleDelete}
            className="bg-neutral-800/15 h-13 w-13 flex items-center justify-center rounded-2xl shadow-lg hover:shadow-none active:shadow-none active:scale-95 transition-all duration-150"
          >
            <MdDeleteOutline size={28} />
          </button>
        </header>

        <form onSubmit={handleForm} className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-xl text-3xl text-white outline-none"
          />
          <textarea
            rows={16}
            value={details}
            onChange={(e) => setdetails(e.target.value)}
            className="w-full px-4 py-2 rounded-xl text-lg text-white outline-none"
            placeholder="Write note details"
          ></textarea>
        </form>
        <h1 className="text-amber-50/50 text-xs text-center ">
          Last Edited : {note?.date}
        </h1>
      </main>
    </section>
  );
};

export default EditNote;
