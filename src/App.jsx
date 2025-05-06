import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./form/SignUp";
import Login from "./form/Login";
import HomePage from "./HomePage/HomePage";
import DashBoard from './DashboardDesignAndView/DashBoard';
import Shop from './Shopping/Shop'; 
import Product from './Shopping/Product';
import Cart from './Shopping/Cart';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/dashboard" element={<DashBoard />} /> 
    </Routes>
  );
};

export default App;
