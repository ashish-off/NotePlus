import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { clearUser } from "@/features/authSlice";
import { useLogoutMutation } from "@/features/authApi";
import { useNavigate } from "react-router-dom";
import AlertDialogSmall from "./AlertDialogSmall";

const Logout = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(clearUser());
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
