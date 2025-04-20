import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Checkbox, Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data;

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        navigate("/home");
      } else {
        setErrorMessage("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96">
        <CardHeader variant="gradient" className="mb-4 grid h-28 place-items-center bg-[#D3D3FF]">
          <Typography variant="h4" className="text-black text-xl font-bold text-center flex items-center gap-2">
            Welcome back! We've missed you
            <span className="text-[#800080] text-2xl">💜</span>
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 bg-white">
          <Input
            label="Email"
            size="lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="-ml-2.5">
            <Checkbox
              label="Remember Me"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
          </div>
        </CardBody>
        <CardFooter className="pt-0 bg-white">
          {errorMessage && (
            <Typography color="red" className="mb-2 text-center">
              {errorMessage}
            </Typography>
          )}
          <Button
            fullWidth
            className="bg-[#D3D3FF] text-black capitalize font-bold text-lg"
            onClick={handleLogin}
          >
            Sign in
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don't have an account?
            <Link to="/sign-up" className="ml-1 font-bold text-black">
              Sign up
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;