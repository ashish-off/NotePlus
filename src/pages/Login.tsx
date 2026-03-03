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

const Login = () => {
  const navigate  = useNavigate();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="w-full flex items-center justify-center h-screen mx-auto py-1 px-4 sm:px-0">
      <Card className="w-full max-w-md py-8 px-2 bg-[#413752] text-white border-gray-600">
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription className="text-gray-400">
            Enter your credentials to access your notes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
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
          <Button type="submit" className="w-full">
            Login
          </Button>
          <p className="text-sm text-gray-400 text-center">
            Don't have an account?{" "}
            <Button variant="link" className="text-white p-0 h-auto" onClick={() =>navigate("/signup")}>
              Sign Up
            </Button>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
};

export default Login;
