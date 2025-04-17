import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=16');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Cart functions
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.id === product.id && 
        item.size === selectedSize && 
        item.color === selectedColor
      );
      
      return existingItem
        ? prevCart.map(item =>
            item.id === product.id && 
            item.size === selectedSize && 
            item.color === selectedColor
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [
            ...prevCart, 
            { 
              ...product, 
              quantity,
              size: selectedSize,
              color: selectedColor
            }
          ];
    });
    setQuickViewProduct(null);
  };

  const removeFromCart = (cartIndex) => {
    setCart(prevCart => prevCart.filter((_, index) => index !== cartIndex));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Product Card Component
  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative border-2 border-[#D3D3FF]">
      <div className="relative group">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-64 object-contain p-4 bg-white"
        />
        <button 
          onClick={() => setQuickViewProduct(product)}
          className="absolute inset-0 m-auto w-32 h-10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ 
            backgroundColor: '#D3D3FF', 
            color: 'white',
            border: '2px solid white'
          }}
        >
          Quick View
        </button>
      </div>
      <div className="p-4 bg-[#D3D3FF]/20">
        <h3 className="text-xl font-semibold text-gray-800 mb-1 truncate">{product.title}</h3>
        <p className="font-bold text-lg mb-4 text-[#D3D3FF]">${product.price}</p>
        <button 
          onClick={() => addToCart(product)}
          className="w-full py-2 rounded-md text-white font-bold transition-colors bg-[#D3D3FF] hover:bg-[#C3C3FF]"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );

  // Quick View Modal
  const QuickViewModal = () => {
    const [quantity, setQuantity] = useState(1);

    if (!quickViewProduct) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <button 
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 left-4 bg-[#D3D3FF] text-white rounded-full p-2 z-10 hover:bg-[#C3C3FF]"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-100 p-6 flex items-center justify-center">
                <img 
                  src={quickViewProduct.image} 
                  alt={quickViewProduct.title}
                  className="max-h-80 object-contain"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{quickViewProduct.title}</h2>
                <p className="text-xl font-bold mb-4 text-[#D3D3FF]">${quickViewProduct.price}</p>
                
                <p className="text-gray-600 mb-6">{quickViewProduct.description}</p>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Size</label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <option value="S">Small (S)</option>
                    <option value="M">Medium (M)</option>
                    <option value="L">Large (L)</option>
                    <option value="XL">Extra Large (XL)</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Color</label>
                  <div className="flex gap-2">
                    {['Red', 'Blue', 'Black', 'White'].map(color => (
                      <button 
                        key={color}
                        className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-[#D3D3FF]' : 'border-gray-300'}`}
                        style={{ 
                          backgroundColor: 
                            color === 'Red' ? '#FF0000' : 
                            color === 'Blue' ? '#0000FF' : 
                            color === 'Black' ? '#000000' : '#FFFFFF' 
                        }}
                        onClick={() => setSelectedColor(color)}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button 
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="px-3 py-1 text-lg hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(q => q + 1)}
                      className="px-3 py-1 text-lg hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <button 
                    onClick={() => addToCart(quickViewProduct, quantity)}
                    className="px-6 py-2 rounded-md text-white font-bold transition-colors bg-[#D3D3FF] hover:bg-[#C3C3FF]"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Cart Item Component
  const CartItem = ({ item, onRemove }) => (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-24 h-24 object-contain rounded-lg border border-gray-200"
        />
        <div>
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-[#D3D3FF] font-medium">${item.price} × {item.quantity}</p>
          <div className="flex gap-2 mt-1">
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">{item.size}</span>
            <span 
              className="w-4 h-4 rounded-full inline-block border border-gray-300"
              style={{ backgroundColor: item.color === 'Red' ? '#FF0000' : 
                item.color === 'Blue' ? '#0000FF' : 
                item.color === 'Black' ? '#000000' : '#FFFFFF' }}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
        <button 
          onClick={onRemove}
          className="text-red-500 hover:text-red-700 text-xl font-bold p-2 rounded-full hover:bg-red-100"
        >
          ×
        </button>
      </div>
    </div>
  );

  // Products Page
  const ProductsPage = () => (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="flex justify-between items-center mb-10">
        <div className="text-center p-4 rounded-lg bg-[#D3D3FF]">
          <h1 className="text-3xl font-bold text-white">Shopping</h1>
        </div>
        <Link 
          to="/cart" 
          className="p-2 rounded-lg flex items-center bg-[#D3D3FF] text-white hover:bg-[#C3C3FF] transition-colors"
        >
          View Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-2xl text-[#D3D3FF]">Loading products...</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );

  // Cart Page
  const CartPage = () => (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="flex justify-between items-center mb-10">
        <div className="text-center p-4 rounded-lg bg-[#D3D3FF]">
          <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
        </div>
        <Link 
          to="/" 
          className="p-2 rounded-lg flex items-center bg-[#D3D3FF] text-white hover:bg-[#C3C3FF] transition-colors"
        >
          Continue Shopping
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">Your cart is empty</p>
            <Link 
              to="/" 
              className="inline-block px-6 py-2 rounded-md text-white font-bold bg-[#D3D3FF] hover:bg-[#C3C3FF] transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div>
            <div className="divide-y divide-gray-200">
              {cart.map((item, index) => (
                <CartItem
                  key={`${item.id}-${index}`}
                  item={item}
                  onRemove={() => removeFromCart(index)}
                />
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Subtotal:</h3>
                <p className="text-xl font-bold text-[#D3D3FF]">
                  ${calculateTotal().toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Shipping:</h3>
                <p className="text-xl font-bold text-[#D3D3FF]">
                  ${(calculateTotal() > 50 ? 0 : 5.99).toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between items-center mb-6 text-2xl font-bold">
                <h3>Total:</h3>
                <p className="text-[#D3D3FF]">
                  ${(calculateTotal() + (calculateTotal() > 50 ? 0 : 5.99)).toFixed(2)}
                </p>
              </div>
              <button 
                className="w-full py-3 rounded-md text-white font-bold transition-colors bg-[#D3D3FF] hover:bg-[#C3C3FF]"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Router>
      <QuickViewModal />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;