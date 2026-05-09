import { useState, useEffect } from 'react';

const Product = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [quickView, setQuickView] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error loading products:', err));
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  if (!products.length) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto text-center py-20">
          <p className="text-gray-500">Loading products...</p>
        </div>
      </div>
    );
  }

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

  const handleCloseQuickView = () => {
    setQuickView(null);
  };

  const handleQuickView = (product) => {
    setQuickView(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
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
                  onClick={() => handleAddToCart(product)}
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
        {quickView && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center">
            <div className="bg-[#F0F0FF] p-8 rounded-lg max-w-sm mx-auto">
              <h2 className="text-2xl font-bold text-[#D3D3FF] mb-4">{quickView.title}</h2>
              <img src={quickView.image} alt={quickView.title} className="w-full h-48 object-contain mb-4" />
              <p className="text-gray-400 mb-4">{quickView.description}</p>
              <p className="font-bold text-[#D3D3FF] mb-4">${quickView.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(quickView)}
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
