import React, { useState, useEffect, useMemo } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdArrowBackIos, MdDeleteOutline } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";

import {
  useUpdateNoteMutation,
  useGetNoteByIdQuery,
  useDeleteNoteMutation,
} from "@/features/notesApi";
import AlertDialogSmall from "@/components/AlertDialogSmall";
import formattedDate from "@/hooks/UseformattedDate";
import { toast } from "sonner";

const EditNote = () => {
  const params = useParams();
  const id = params.id ?? "";
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetNoteByIdQuery(id);
  const note = useMemo(() => {
    return data?.data
      ? {
          id: data.data._id,
          title: data.data.title,
          details: data.data.details,
          date: formattedDate(data.data.updatedAt),
        }
      : undefined;
  }, [data]);

  const [updateNote] = useUpdateNoteMutation();
  const [deleteNote] = useDeleteNoteMutation();
  const [title, setTitle] = useState<string>("");
  const [details, setdetails] = useState<string>("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setdetails(note.details);
    }
  }, [note]);

  const handleForm = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ): Promise<void> => {
    e.preventDefault();

    if (id && title.trim() && details.trim()) {
      try {
        const editedNote = { title, details };
        await updateNote({ id, data: editedNote }).unwrap();
        navigate("/");
        toast.success("Note has been updated");
      } catch (error) {
        toast.error("Failed to update note");
      }
    } else {
      toast.error("Please fill in all the fields");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteNote(id).unwrap();
      toast.info("Note has been deleted");
      navigate("/");
    } catch (error) {
      toast.error("Failed to delete note");
    }
  };

  return (
    <section className="w-full sm:w-md mx-auto py-1 px-4 sm:px-0">
      <main className="bg-[#3F3A47] my-8 shadow-2xl rounded-4xl">
        <header className="flex justify-between items-center py-4 px-4">
          <Link
            to={"/"}
            className="bg-[#4f4bbd] text-amber-50/80 h-13 w-13 flex items-center justify-center rounded-2xl hover:scale-104 active:shadow-none active:scale-95 transition-all duration-100"
          >
            <MdArrowBackIos size={28} />{" "}
          </Link>

          {!isLoading && !isError && (
            <div className="flex gap-4">
              <button
                onClick={handleForm}
                className="bg-[#4f4bbd] text-amber-50/80 h-13 w-13 flex items-center justify-center rounded-2xl hover:scale-104 active:shadow-none active:scale-95 transition-all duration-100"
              >
                <IoMdCheckmark size={32} />
              </button>

              <AlertDialogSmall
                title="Delete Notes"
                description="You will lose your notes."
                actionText="Delete"
                handleAction={handleDelete}
                trigger={
                  <button className="bg-[#4f4bbd] text-amber-50/80 h-13 w-13 flex items-center justify-center rounded-2xl hover:scale-104 active:shadow-none active:scale-95 transition-all duration-100">
                    <MdDeleteOutline size={28} />
                  </button>
                }
              />
            </div>
          )}
        </header>

        {isLoading && (
          <div className="py-20 text-center text-2xl text-amber-50/50">
            Loading note...
          </div>
        )}

        {isError && (
          <div className="py-20 text-center text-2xl text-red-400">
            Error loading note!
          </div>
        )}

        {!isLoading && !isError && (
          <>
            <form onSubmit={handleForm} className="flex flex-col gap-4 mt-4">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 rounded-xl text-3xl text-amber-50/80 outline-none"
              />
              <textarea
                rows={16}
                value={details}
                onChange={(e) => setdetails(e.target.value)}
                className="w-full px-4 py-2 rounded-xl text-lg text-amber-50/80 outline-none"
                placeholder="Write note details"
              ></textarea>
            </form>
            <h1 className=" text-[#a18478] text-xs text-center relative bottom-3">
              Last Edited : {note?.date}
            </h1>
          </>
        )}
      </main>
    </section>
  );
};

export default EditNote;
