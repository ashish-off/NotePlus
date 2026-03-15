import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, Note } from "../types";

export const noteApi = createApi({
  reducerPath: "noteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    credentials: "include",
  }),
  tagTypes: ["Notes"],
  endpoints: (builder) => ({
    // Fetch all notes
    getNotes: builder.query<ApiResponse<Note[]>, void>({
      query: () => "/notes",
      providesTags: ["Notes"],
    }),
    // Create a new note
    createNote: builder.mutation<ApiResponse<Note>, Partial<Note>>({
      query: (newNote) => ({
        url: "/notes",
        method: "POST",
        body: newNote,
      }),
      invalidatesTags: ["Notes"],
    }),

    // update a note
    updateNote: builder.mutation<
      ApiResponse<Note>,
      { id: string; data: Partial<Note> }
    >({
      query: ({ id, data }) => ({
        url: `/notes/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Notes"],
    }),

    // delete a note
    deleteNote: builder.mutation<ApiResponse<null>, string>({
      query: (id) => ({
        url: `/notes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notes"],
    }),

    // delete all notes
    deleteAllNotes: builder.mutation<ApiResponse<null>, void>({
      query: () => ({
        url: "/notes/delete-all",
        method: "DELETE",
      }),
      invalidatesTags: ["Notes"],
    }),
    // fetch a single note by ID
    getNoteById: builder.query<ApiResponse<Note>, string>({
      query: (id) => `/notes/${id}`,
      providesTags: ["Notes"],
    }),
  }),
});

export const {
  useGetNotesQuery,
  useCreateNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
  useDeleteAllNotesMutation,
  useGetNoteByIdQuery,
} = noteApi;
