import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import SignUp from './form/SignUp';
import Login from './form/Login';
import HomePage from './HomePage/HomePage';
import DashBoard from './DashboardDesignAndView/DashBoard';
import Product from './Shopping/Product';
import Cart from './Shopping/Cart';
import ContactUS from "./contact page/contact";
import Nav from './Nav';
import Footer from './HomePage/Footer';


 const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://depis2back.vercel.app/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); 
      })
      .catch((err) => console.error('Error loading products:', err));
  }, []);



  return (
    <div>
      
      <Nav />
    <Routes>

      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<HomePage />} />
      <Route 
        path="/product" 
        element={<Product cart={cart} setCart={setCart} products={products} />} 
      />
      <Route 
        path="/cart" 
        element={<Cart cart={cart} setCart={setCart} />} 
      />
      <Route path="/dashboard" element={<DashBoard />} />

    </Routes>
    <Footer />
    </div>
  );
};

export default App;
