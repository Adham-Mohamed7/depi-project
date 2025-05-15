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
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = "https://depis2back.vercel.app/api/users";

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
    
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}/signup`, {
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
      
      if (error.response) {
        if (error.response.status === 400 && error.response.data.message === 'User already exists') {
          setErrorMessage("This email is already registered.");
        } else {
          setErrorMessage(error.response.data.message || "Something went wrong. Please try again.");
        }
      } else {
        setErrorMessage("Network error. Please check your connection and try again.");
      }
    } finally {
      setIsLoading(false);
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
        <CardBody className="flex flex-col bg-white">
          <Typography variant="small" color="black" className="mb-1 font-semibold">
            User Name
          </Typography>
          <Input
            size="lg"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <Typography variant="small" color="black" className="mt-4 mb-1 font-semibold">
            Email
          </Typography>
          <Input
            size="lg"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />

          <Typography variant="small" color="black" className="mt-4 mb-1 font-semibold">
            Password
          </Typography>
          <Input
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
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Create Account"}
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
