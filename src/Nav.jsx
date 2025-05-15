import { useState, useEffect } from 'react';
import { FiSearch,  FiUser, FiMenu, FiX } from 'react-icons/fi';
import { CiLogin } from "react-icons/ci";
import {Link} from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
         
          <Link to="/" className="text-2xl font-bold text-gray-800">
            COZA <span className='font-light'> STORE</span>
          </Link>

         
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-500 transition-colors">Home</Link>
            <Link to='/Product' className="text-gray-800 hover:text-blue-500 transition-colors">Shop</Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-500 transition-colors">Contact</Link>
          </nav>
      
          <div className="hidden md:flex items-center space-x-4">
            <Link to = "/Login" className="text-gray-800 hover:text-blue-500 transition-colors">
              <CiLogin className="text-xl" />
            </Link> 
          </div>

          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>

        
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-800 hover:text-blue-500 transition-colors py-2">Home</Link>
            <Link to='/Product' className="text-gray-800 hover:text-blue-500 transition-colors py-2">Shop</Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-500 transition-colors py-2">Contact</Link>
            <div className="flex items-center space-x-4 pt-4">    
              <button className="text-gray-800 hover:text-blue-500 transition-colors">
                <FiUser className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;