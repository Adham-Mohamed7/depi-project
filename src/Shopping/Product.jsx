import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Product = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/695c748c-8be5-4603-9f05-5bcd465b6011")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error('Error loading products:', err));
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(prevCart => 
        prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const openQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#D3D3FF]">Our Products</h1>
          <Link to="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#D3D3FF] hover:text-[#b8b8ff]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#b8b8ff] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-[#D3D3FF]">
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4 cursor-pointer">
                <img src={product.image} alt={product.title} className="h-full object-contain" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-1">{product.title}</h3>
                <p className="text-[#D3D3FF] font-bold mb-2">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-[#D3D3FF] hover:bg-[#b8b8ff] text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => openQuickView(product)}
                  className="mt-2 w-full bg-[#b8b8ff] text-white font-medium py-2 px-4 rounded-md hover:bg-[#D3D3FF] transition-colors"
                >
                  Quick View
                </button>
              </div>
            </div>
          ))}
        </div>

        {isQuickViewOpen && selectedProduct && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
                <button onClick={closeQuickView} className="text-gray-500 text-xl">&times;</button>
              </div>
              <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-60 object-contain mb-4" />
              <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
              <p className="font-bold text-[#D3D3FF]">${selectedProduct.price.toFixed(2)}</p>
              <div className="mt-4">
                <button
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    closeQuickView();
                  }}
                  className="w-full bg-[#D3D3FF] hover:bg-[#b8b8ff] text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;