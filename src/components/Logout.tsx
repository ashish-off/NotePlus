import { useDispatch } from "react-redux";
import { clearUser } from "@/features/authSlice";
import { useLogoutMutation } from "@/features/authApi";
import { authApi } from "@/features/authApi";
import { noteApi } from "@/features/notesApi";
import { useNavigate } from "react-router-dom";
import AlertDialogSmall from "./AlertDialogSmall";
import { toast } from "sonner";

const Logout = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(clearUser());
      dispatch(authApi.util.resetApiState());
      dispatch(noteApi.util.resetApiState());
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.log("logOut Error: ", error);
    }
  };
  return (
    <AlertDialogSmall
      title="Do you want to log out?"
      description="You will need to log in again to access your notes."
      actionText="Logout"
      handleAction={handleLogout}
      trigger={
        <button className="text-center w-full py-3 transition-all duration-100  hover:scale-105 active:shadow-none active:scale-95">
          Log Out
        </button>
      }
    />
  );
};

export default Logout;
