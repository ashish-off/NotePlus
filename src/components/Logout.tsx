import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { clearUser } from "@/features/authSlice";
import { useLogoutMutation } from "@/features/authApi";
import {authApi} from "@/features/authApi";
import {noteApi} from "@/features/notesApi";
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
        <Button
          variant="outline"
          className="bg-transparent text-white hover:text-white border-amber-50/30 hover:bg-amber-50/5"
        >
          Log Out
        </Button>
      }
    />
  );
};

export default Logout;
