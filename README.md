# NotePlus Frontend

NotePlus is a modern note-taking frontend built with React, TypeScript, Redux Toolkit, and Vite.
It connects to the NotePlus backend API for authentication and note management.

Live app: [noteplus-ashish.vercel.app](https://noteplus-ashish.vercel.app/)

## Current Features

- RTK Query cache invalidation for auth and notes flows.
- Authentication with login, signup, logout, and protected routes.
- User profile page to view current user name and email.
- Create, read, update, and delete notes.
- Delete all notes in one action.
- Search notes by title.
- Last edited timestamp shown from MongoDB `updatedAt`, formatted on the frontend.
- Responsive UI with Tailwind + shadcn/ui components.

## Tech Stack

- React + TypeScript
- Vite
- Redux Toolkit + RTK Query
- React Router
- Tailwind CSS v4
- shadcn/ui + Radix UI

## Project Structure

```text
src/
  app/          # Redux store
  components/   # Reusable UI and feature components
  features/     # RTK Query APIs + slices
  pages/        # Route pages
  hooks/        # Utility hooks/helpers
  types/        # Shared TypeScript types
```

## Environment Variables

Create a `.env` file in `Note-app-react/`:

```env
VITE_API_URL=https://noteplus-backend-lqbd.onrender.com/api
```

For local backend usage:

```env
VITE_API_URL=http://localhost:3000/api
```

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ashish-off/NotePlus.git
   ```

2. Go to the frontend folder:

   ```bash
   cd NotePlus
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Add your `.env` file (see above).

5. Start the dev server:

   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev` - Run development server
- `npm run build` - Type-check and build production bundle

## Notes

- This frontend expects backend cookie-based auth (`credentials: include`).
- User session info is persisted in localStorage for smoother reload behavior.

## Author

- [Ashish Saud](https://github.com/ashish-off)
- [LinkedIn](https://www.linkedin.com/in/ashish-saud-55ab57294)
- [X (Twitter)](https://x.com/ashish_saud15)
