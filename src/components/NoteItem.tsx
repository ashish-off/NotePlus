import React from "react";
import { notesType } from "../types";
import { Link } from "react-router-dom";

interface notePropType {
  note: notesType;
}
const NoteItem = ({ note }: notePropType) => {
  return (
    <Link
      to={`/edit-note/${note.id}`}
      className="bg-zinc-700/40 p-3 md:p-4 lg:p-6 flex flex-col justify-between gap-4 cursor-pointer transition-all duration-150 text-white hover:opacity-85 hover:scale-98 active:scale-105 "
    >
      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-4">
          {note.title.length > 30
            ? note.title.substring(0, 30) + " ..."
            : note.title}
        </h3>
        <pre className="font-[Roboto] text-sm sm:text-base tracking-wide whitespace-pre-wrap break-words text-amber-50/90">
          {note.details.length > 100
            ? note.details.substring(0, 100) + " ..."
            : note.details}
        </pre>
      </div>

      <p className="text-[10px] sm:text-xs opacity-60 ">{note.date}</p>
    </Link>
  );
};

export default NoteItem;
