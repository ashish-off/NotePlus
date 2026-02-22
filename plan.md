## Plan: Migrate to RTK Query + Backend API

**TL;DR:** Replace localStorage-based Redux slice with RTK Query to interact with your Express/MongoDB backend at `localhost:3000/api/notes`. We'll create an API slice with CRUD endpoints, update all page components to use RTK Query hooks, remove localStorage sync from [App.tsx](src/App.tsx), and add Sonner toasts for user feedback. The existing UI remains unchanged—only data layer modifications.

**Steps**

1. **Install shadcn/ui & Sonner**
   - Run `npx shadcn@latest init` to scaffold shadcn config
   - Run `npx shadcn@latest add sonner` to add toast component
   - Add `<Toaster />` to [App.tsx](src/App.tsx) inside the root div

2. **Create RTK Query API slice**
   - Create new file `src/services/notesApi.ts`
   - Define `createApi` with `fetchBaseQuery` pointing to `http://localhost:3000/api`
   - Create endpoints:
     - `getNotes`: GET `/notes` → returns `data.data` (array of notes)
     - `createNote`: POST `/notes` with `{ title, details, date }` body
     - `updateNote`: PUT `/notes/:id` with updated note body
     - `deleteNote`: DELETE `/notes/:id`
     - `deleteAllNotes`: DELETE `/notes` (if your backend supports it)
   - Handle response transformation: map `_id` from MongoDB to `id` for frontend consistency

3. **Update types**
   - Modify [types/index.ts](src/types/index.ts): make `id` required (since backend always provides it), add optional `_id` for raw API response typing

4. **Configure store**
   - Update [store.ts](src/app/store.ts) to add the API reducer and middleware from `notesApi`

5. **Update [Notes.tsx](src/pages/Notes.tsx)**
   - Replace `useSelector` with `useGetNotesQuery()` hook
   - Show loading spinner while `isLoading` is true
   - Use `useDeleteAllNotesMutation` for delete all action
   - Show toast on success/error

6. **Update [CreateNote.tsx](src/pages/CreateNote.tsx)**
   - Replace `dispatch(addNote(...))` with `useCreateNoteMutation` hook
   - Remove client-side `uuid()` generation (backend generates `_id`)
   - Show success toast on create, error toast on failure

7. **Update [EditNote.tsx](src/pages/EditNote.tsx)**
   - Use `useGetNotesQuery` or pass data via route state
   - Replace `dispatch(editNote(...))` with `useUpdateNoteMutation`
   - Replace `dispatch(deleteNote(...))` with `useDeleteNoteMutation`
   - Show appropriate toasts

8. **Clean up legacy code**
   - Delete the localStorage `useEffect` block in [App.tsx](src/App.tsx#L14-L16)
   - Remove or deprecate `loadFromLocalStorage()` and reducers in [noteSlice.ts](src/features/noteSlice.ts) (can keep file for reference or delete entirely)
   - Remove `uuid` dependency from [CreateNote.tsx](src/pages/CreateNote.tsx#L23)

9. **Add typed hooks (optional but recommended)**
   - Create `src/hooks/useApi.ts` with typed versions of RTK Query hooks for better DX

**Verification**

- Start backend: `npm run dev` (or your backend command) on port 3000
- Start frontend: `npm run dev` on its port
- Test: Create a note → verify it appears in MongoDB
- Test: Edit a note → verify changes persist after refresh
- Test: Delete a note → verify removal
- Test: Network error → verify toast appears

**Decisions**

- RTK Query over createAsyncThunk: provides caching, automatic re-fetching, and cleaner component code
- Backend generates IDs: removed client-side uuid, mapped `_id` → `id` in response transformation
- Sonner for toasts: lightweight, integrates with shadcn theming
