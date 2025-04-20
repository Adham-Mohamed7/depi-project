import { useState, useEffect } from 'react';
import { FiSearch, FiShoppingBag, FiUser, FiMenu, FiX } from 'react-icons/fi';

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
         
          <a href="/" className="text-2xl font-bold text-gray-800">
            COZA <span className='font-light'> STORE</span>
          </a>

         
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Home</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Shop</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">About</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors">Contact</a>
          </nav>

          
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-800 hover:text-blue-500 transition-colors">
              <FiSearch className="text-xl" />
            </button>
            <button className="text-gray-800 hover:text-blue-500 transition-colors">
              <FiUser className="text-xl" />
            </button>
            <button className="text-gray-800 hover:text-blue-500 transition-colors relative">
              <FiShoppingBag className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
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
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors py-2">Home</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors py-2">Shop</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors py-2">Features</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors py-2">Blog</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors py-2">About</a>
            <a href="#" className="text-gray-800 hover:text-blue-500 transition-colors py-2">Contact</a>
            
            <div className="flex items-center space-x-4 pt-4">
              <button className="text-gray-800 hover:text-blue-500 transition-colors">
                <FiSearch className="text-xl" />
              </button>
              <button className="text-gray-800 hover:text-blue-500 transition-colors">
                <FiUser className="text-xl" />
              </button>
              <button className="text-gray-800 hover:text-blue-500 transition-colors relative">
                <FiShoppingBag className="text-xl" />
                <span className="absolute -top-2 -right-2 bg-bblue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;