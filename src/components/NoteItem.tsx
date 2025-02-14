import { notesType } from "../types";
import { Link } from "react-router-dom";

interface notePropType {
  note: notesType;
}
const NoteItem = ({ note }: notePropType) => {
  return (
    <Link
      to={`/edit-note/${note.id}`}
      className="bg-[#3F3A47] text-amber-50/55 hover:text-amber-50/95 p-3 md:p-4 lg:p-6 rounded-lg flex flex-col justify-between gap-4 cursor-pointer transition-all duration-150 hover:scale-101 active:scale-95  "
    >
      <div>
        <h3 className="text-lg sm:text-xl text-amber-50/95 font-semibold mb-4">
          {note.title.length > 30
            ? note.title.substring(0, 30) + " ..."
            : note.title}
        </h3>
        <pre className="font-[Roboto]   text-sm sm:text-base font-semibold whitespace-pre-wrap break-words ">
          {note.details.length > 100
            ? note.details.substring(0, 100) + " ..."
            : note.details}
        </pre>
      </div>

      <p className="text-[10px] sm:text-xs text-[#af9388] font-bold opacity-60 ">{note.date}</p>
    </Link>
  );
};

export default NoteItem;
