import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./form/SignUp";
import Login from "./form/Login";
import Home from "./Home";

//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './Shopping/Product';
import Cart from './Shopping/Cart';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
};

export default App;