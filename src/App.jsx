import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./form/SignUp";
import Login from "./form/Login";
import Home from "./Home";
import Shopping from './Shopping/Shop'; 
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shopping />} /> 
    </Routes>
  );
};

export default App;
