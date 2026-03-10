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
      dispatch(setUser({ name: data.user.name }));
    }
    if (isError) {
      dispatch(clearUser());
    }
  }, [isSuccess, isError, data, dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        Loading...
      </div>
    );
  }

  if (isError) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
