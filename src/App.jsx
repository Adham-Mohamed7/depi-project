import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./form/SignUp";
import Login from "./form/Login";
import Home from "./Home"; 
import Shopping from './Shopping/Shop'; 
import DashBoard from './DashboardDesignAndView/DashBoard';
import Product from './Shopping/Product';
import Cart from './Shopping/Cart';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shop" element={<Shopping />} /> 
      <Route path="/dashboard" element={<DashBoard />} /> 
    </Routes>
  );
};

export default App;
