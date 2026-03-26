import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDeleteAllNotesMutation } from "@/features/notesApi";
import { MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import AlertDialogSmall from "./AlertDialogSmall";
import Logout from "./Logout";

const ShowMore = () => {
    const [deleteAllNotes] = useDeleteAllNotesMutation();
  const handleDeleteAll = () => {
    deleteAllNotes();
  };
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <button
          title="Show More"
          className="text-white absolute bottom-0  bg-[#4f4bbd] h-13 w-13 flex items-center justify-center rounded-2xl shadow-lg transition-all duration-100 hover:shadow-none hover:scale-102 active:shadow-none active:scale-95"
        >
          <MdMoreVert size={26} />
        </button>
        </PopoverTrigger>
        <PopoverContent align="end" className="text-white border-none bg-[#886e63b7] flex flex-col  w-34 items-center justify-center rounded-2xl p-0 ">
                <Link
                  to={"/create-note"}
                  className=" text-center w-full py-3 transition-all duration-100  hover:scale-105 active:shadow-none active:scale-95"
                >
                  Add Note
                </Link>

                <div className="border-1 border-neutral-600 w-full"></div>
                <Link
                  to={"/profile"}
                  className=" text-center w-full py-3 transition-all duration-100  hover:scale-105 active:shadow-none active:scale-95"
                >
                  Profile
                </Link>
                <div className="border-1 border-neutral-600 w-full"></div>

                <AlertDialogSmall
                  title="Delete All Notes?"
                  description="You will lose all your notes."
                  actionText="Delete"
                  handleAction={handleDeleteAll}
                  trigger={
                    <button className="text-center w-full py-3 transition-all duration-100  hover:scale-105 active:shadow-none active:scale-95">
                      Delete All
                    </button>
                  }
                />          
                  <div className="border-1 border-neutral-600 w-full"></div>
                  <Logout />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ShowMore;
