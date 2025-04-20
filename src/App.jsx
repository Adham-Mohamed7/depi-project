import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SignUp from "./form/SignUp";
import Login from "./form/Login";
import Home from "./Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;