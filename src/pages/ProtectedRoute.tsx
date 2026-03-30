import { Navigate } from "react-router-dom";
import { JSX, useEffect } from "react";
import { useGetMeQuery } from "@/features/authApi";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "@/features/authSlice";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const dispatch = useDispatch();
  const { data, isLoading, isError, isSuccess } = useGetMeQuery();

  // Sync auth state with server response
  useEffect(() => {
    if (isSuccess && data?.user) {
      dispatch(setUser(data.user));
    }
    if (isError) {
      dispatch(clearUser());
    }
  }, [isSuccess, isError, data, dispatch]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-2 px-4 text-center text-white">
        <p className="text-lg font-medium">Loading...</p>
        <p className="max-w-md text-sm text-zinc-300">
          This can take 20-40 seconds because the backend is hosted on Render
          free plan and may need a cold start.
        </p>
      </div>
    );
  }

  if (isError) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
