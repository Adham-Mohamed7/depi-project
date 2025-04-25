import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './Shopping/Product';
import Cart from './Shopping/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
