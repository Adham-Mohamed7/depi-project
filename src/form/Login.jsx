import { Card, CardHeader, CardBody, CardFooter, Typography, Input, Checkbox, Button } from "@material-tailwind/react"; 
import { Link, useNavigate } from "react-router-dom"; 
import { useState, useEffect } from "react"; 
import axios from "axios"; 

const Login = () => { 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [rememberMe, setRememberMe] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(""); 
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 
  const API_URL = "https://depis2back.vercel.app/api/users";

  const isFormValid = () => {
    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleLogin = async () => {
    if (!isFormValid()) return;
    
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password
      });

      const { token } = response.data;
      localStorage.setItem("authToken", token);
      
      if (rememberMe) {
        localStorage.setItem("rememberEmail", email);
      } else {
        localStorage.removeItem("rememberEmail");
      }
      
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        if (error.response.status === 401) {
          setErrorMessage("Invalid email or password. Please try again.");
        } else {
          setErrorMessage(error.response.data.message || "Login failed. Please try again.");
        }
      } else {
        setErrorMessage("Network error. Please check your connection and try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }; 

  useEffect(() => {
    const rememberedEmail = localStorage.getItem("rememberEmail");
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  return ( 
    <div className="flex justify-center items-center h-screen bg-gray-100"> 
      <Card className="w-96"> 
        <CardHeader variant="gradient" className="mb-4 grid h-28 place-items-center bg-[#D3D3FF]"> 
          <Typography variant="h4" className="text-black text-xl font-bold text-center flex items-center gap-2"> 
            Welcome back! We've missed you 
            <span className="text-[#800080] text-2xl">💜</span> 
          </Typography> 
        </CardHeader> 
        <CardBody className="flex flex-col bg-white">
          <Typography variant="small" color="black" className="mb-1 font-semibold">
            Email
          </Typography>
          <Input 
            size="lg" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="!border-gray-300 mb-4" 
          />

          <Typography variant="small" color="black" className="mb-1 font-semibold">
            Password
          </Typography>
          <Input 
            size="lg" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="!border-gray-300 mb-4" 
          />

          <div className="-ml-2.5 mb-4"> 
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
            disabled={isLoading}
          > 
            {isLoading ? "Signing in..." : "Sign in"}
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
