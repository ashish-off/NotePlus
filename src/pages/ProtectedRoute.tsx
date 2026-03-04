import { useSelector } from "react-redux";
import Login from "./Login";
import { JSX } from "react";

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthinticated } = useSelector(
      (state: {
        authStore: { name: string | null; isAuthinticated: boolean };
      }) => state.authStore,
    );
    return isAuthinticated ? children : <Login />;
  };
  export default ProtectedRoute;