import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";

const CreateNote = () => {
  return (
    <section className="w-full md:w-md mx-auto py-4 px-4 md:px-0">
      <main className="bg-gray-900/20 my-8 shadow-2xl rounded-4xl">
        <header className="flex justify-between items-center py-4 px-4">
          <Link
            to={"/"}
            className="bg-neutral-800/15 h-13 w-13 flex items-center justify-center rounded-2xl shadow-lg hover:shadow-none active:shadow-none active:scale-95"
          >
            <MdArrowBackIos size={28} />{" "}
          </Link>
          <button className="bg-neutral-800/15 h-13 w-13 flex items-center justify-center rounded-2xl shadow-lg hover:shadow-none active:shadow-none active:scale-95">
            <IoMdCheckmark size={32} />
          </button>
        </header>

        <form className="flex flex-col gap-4 mt-4">
          <input
            type="text"
            placeholder="Title"
            autoFocus
            className="w-full px-4 py-2 rounded-xl text-3xl text-white outline-none"
          />
          <textarea
            rows={16}
            className="w-full px-4 py-2 rounded-xl text-lg text-white outline-none"
            placeholder="Write note details"
          ></textarea>
        </form>
      </main>
    </section>
  );
};

export default CreateNote;
