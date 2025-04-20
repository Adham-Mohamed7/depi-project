import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './DashboardDesignAndView/AdminLayout';
import SignUp from './form/SignUp';
import Login from './form/Login';
import Home from './Home';
import HomePage from "./HomePage/HomePage";
import Product from './Product';
import Cart from './Cart';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin/*" element={<AdminLayout products={products} />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

