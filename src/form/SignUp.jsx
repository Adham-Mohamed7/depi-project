import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isUserCreatedSuccessfully, setIsUserCreatedSuccessfully] = useState(false);

  const isFormValid = () => {
    if (!userName || !emailAddress || !userPassword) {
      setErrorMessage("All fields are required.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailAddress)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    if (userPassword.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const createNewUserAccount = async () => {
    if (!isFormValid()) return;

    try {
      const serverResponse = await axios.get("http://localhost:3000/users");
      const doesEmailAlreadyExist = serverResponse.data.some(
        (user) => user.email === emailAddress
      );

      if (doesEmailAlreadyExist) {
        setErrorMessage("This email is already registered.");
        return;
      }

      await axios.post("http://localhost:3000/users", {
        userName,
        email: emailAddress,
        password: userPassword,
      });

      setIsUserCreatedSuccessfully(true);
      setUserName("");
      setEmailAddress("");
      setUserPassword("");
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96">
        <CardHeader variant="gradient" className="mb-4 grid h-28 place-items-center bg-[#D3D3FF]">
          <Typography variant="h5" color="black">
            Sign up and let the shopping begin!
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 bg-white">
          <Input
            label="User Name"
            size="lg"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            label="Email"
            size="lg"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </CardBody>
        <CardFooter className="pt-0 bg-white">
          {errorMessage && <Typography color="red">{errorMessage}</Typography>}
          {isUserCreatedSuccessfully && (
            <Typography color="green">User created successfully!</Typography>
          )}
          <Button
            fullWidth
            className="bg-[#D3D3FF] text-black capitalize font-bold text-lg"
            onClick={createNewUserAccount}
          >
            Create Account
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Link to="/login" className="ml-1 font-bold text-black">
              Login
            </Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;