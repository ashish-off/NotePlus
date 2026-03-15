import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full flex flex-col items-center justify-center h-screen gap-6 px-4 text-white">
      <p className="text-8xl font-bold text-[#a78bfa]">404</p>
      <h1 className="text-2xl font-semibold">Page Not Found</h1>
      <p className="text-gray-400 text-center max-w-sm">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Button
        onClick={() => navigate("/")}
        className="bg-[#413752] hover:bg-[#513d64] border border-gray-600 text-white px-6"
      >
        Go Home
      </Button>
    </section>
  );
};

export default NotFound;
