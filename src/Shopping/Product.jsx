import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Product = ({ cart, setCart }) => {  
  const [products, setProducts] = useState([]);
  const [quickView, setQuickView] = useState(null);

  useEffect(() => {
    fetch('/db.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error('Error loading products:', err));
  }, []);

  const handleQuickView = (product) => {
    setQuickView(product);
  };

  const handleCloseQuickView = () => {
    setQuickView(null);
  };
  const addToCart = (product) => {
    setCart([...cart, product]); 
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
      <Link 
  to="/HomePage" 
  className="absolute top-6 left-6 flex items-center justify-center w-16 h-16 bg-[#D3D3FF] rounded-full hover:bg-[#b8b8ff] transition-colors"
  title="Back to Home"
>
  <span className="text-white text-3xl">🏠</span>
</Link>
<Link 
  to="/cart" 
  state={{ cart }}
  className="absolute top-6 right-6 flex items-center justify-center w-12 h-12 bg-[#D3D3FF] rounded-full hover:bg-[#b8b8ff] transition-colors"
>
  <span className="text-white text-xl">🛒</span>
  {cart.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-[#A3A3FF] text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
      {cart.length}
    </span>
  )}
</Link>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#D3D3FF]">Our Products</h1>
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
                  onClick={() => addToCart(product)}
                  className="w-full bg-[#D3D3FF] hover:bg-[#b8b8ff] text-white font-medium py-2 px-4 rounded-md transition-colors mb-2"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleQuickView(product)}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded-md transition-colors"
                >
                  Quick View
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Quick View Modal */}
        {quickView && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center">
            <div className="bg-[#F0F0FF] p-8 rounded-lg max-w-sm mx-auto">
              <h2 className="text-2xl font-bold text-[#D3D3FF] mb-4">{quickView.title}</h2>
              <img src={quickView.image} alt={quickView.title} className="w-full h-48 object-contain mb-4" />
              <p className="text-gray-400 mb-4">{quickView.description}</p>
              <p className="font-bold text-[#D3D3FF] mb-4">${quickView.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(quickView)}
                className="w-full bg-[#D3D3FF] hover:bg-[#b8b8ff] text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={handleCloseQuickView}
                className="w-full mt-4 bg-gray-300 hover:bg-gray-400 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;