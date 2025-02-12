import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { addNote } from "../features/noteSlice";
import formattedDate from "../hooks/UseformattedDate";

const CreateNote = () => {
  const [title, setTitle] = useState <string>("")
  const [details, setDetails] = useState <string>("");

  const nevigate = useNavigate()
  const dispatch = useDispatch()


  const handleSubmit = (e : React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement> ): void => {
    e.preventDefault();
    
    if(title && details){
      const note = {
        id: uuidv4(),
        title,
        details,
        date: formattedDate,
      }
      dispatch(addNote(note));
      console.log(note);

      nevigate("/")
      
    }

  }

  return (
    <section className="w-full md:w-md mx-auto py-4 px-4 md:px-0">
      <main className="bg-gray-900/20 my-8 shadow-2xl rounded-4xl">
        <header className="flex justify-between items-center py-4 px-4">
          <Link
            to={"/"}
            className="bg-neutral-800/15 h-13 w-13 flex items-center justify-center rounded-2xl shadow-lg hover:shadow-none active:shadow-none active:scale-95 transition-all duration-150"
          >
            <MdArrowBackIos size={28} />{" "}
          </Link>

          <button onClick={handleSubmit} className="bg-neutral-800/15 h-13 w-13 flex items-center justify-center rounded-2xl shadow-lg hover:shadow-none active:shadow-none active:scale-95 transition-all duration-150">
            <IoMdCheckmark size={32} />
          </button>
        </header>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            className="w-full px-4 py-2 rounded-xl text-3xl text-white outline-none"
          />
          <textarea
            rows={16}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full px-4 py-2 rounded-xl text-lg text-white outline-none"
            placeholder="Write note details"
          ></textarea>
        </form>
      </main>
    </section>
  );
};

export default CreateNote;
