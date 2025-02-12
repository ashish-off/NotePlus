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
      className="bg-zinc-700/40 p-4 md:p-6 lg:p-8 flex flex-col gap-4 cursor-pointer transition-all duration-150 text-white hover:opacity-85 "
    >
      <h3 className="text-xl font-semibold ">
        {note.title.length > 50
          ? note.title.substring(0, 50) + "..."
          : note.title}
      </h3>
      <pre className="font-[Roboto]  whitespace-pre-wrap break-words">{note.details.length>200 ? (note.details.substring(0, 200)) + "..." : note.details }</pre>
      <p className="text-xs opacity-85 ">{note.date}</p>
    </Link>
  );
};

export default NoteItem;
