import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './form/SignUp';
import Login from './form/Login';
import HomePage from './HomePage/HomePage';
import DashBoard from './DashboardDesignAndView/DashBoard';
import Product from './Shopping/Product';

import Cart from './Shopping/Cart';
import ContactUS from "./contact page/contact";



import Cart from './Shopping/Cart'; 


const App = () => {
  const [cart, setCart] = useState([]); 

  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
        <Route path="/contact page" element={<ContactUS/>} />


      <Route path="/" element={<HomePage />} />
      <Route 
        path="/product" 
        element={<Product cart={cart} setCart={setCart} />} 
      />
      <Route 
        path="/cart" 
        element={<Cart cart={cart} setCart={setCart} />} 
      />
      <Route path="/dashboard" element={<DashBoard />} />

    </Routes>
  );
};

export default App;
