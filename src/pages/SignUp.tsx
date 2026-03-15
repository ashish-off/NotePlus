import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../features/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/features/authSlice";
import { RegisterCredentials } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

const SignUp = () => {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();
  const [error, setError] = useState<string>("");

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values: RegisterCredentials = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    try {
      const data = await register(values).unwrap();
      dispatch(setUser({ name: data.user.name }));
      toast.success("Account created successfully");
      navigate("/");
    } catch (error : any) {
      setError(error.data?.message);
    }
  };
  return (
    <section className="w-full flex items-center justify-center h-screen mx-auto py-1 px-4 sm:px-0">
      <Card className="w-full max-w-md py-8 px-2 bg-[#413752] text-white border-gray-600">
        <CardHeader>
          <CardTitle>Create Your NotePlus Account</CardTitle>
          <CardDescription className="text-gray-400">
            Sign up to start organizing your notes effortlessly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} id="signupForm">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Username</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="ashish"
                  required
                  className="border-gray-400"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="border-gray-400"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="border-gray-400"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            type="submit"
            className="w-full"
            form="signupForm"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Sign Up"}
          </Button>
          <p className="text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <Button
              variant="link"
              className="text-white p-0 h-auto"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
};

export default SignUp;
