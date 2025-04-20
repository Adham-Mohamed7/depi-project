import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import HomePage from "./HomePage/HomePage"

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </div>
    
   );
}

export default App;
