import { Link, useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  // تجميع المنتجات المكررة وعدّ الكمية
  const cartItems = cart.reduce((acc, product) => {
    const existingItem = acc.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice += product.price;
    } else {
      acc.push({
        ...product,
        quantity: 1,
        totalPrice: product.price,
      });
    }
    return acc;
  }, []);

  const total = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  // إزالة عنصر واحد
  const removeSingleItem = (product) => {
    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  // ✅ إضافة عنصر واحد (تصليح زر +)
  const addSingleItem = (product) => {
    setCart([...cart, { ...product }]);
  };

  // إزالة كل الكمية من منتج معين
  const removeAllOfItem = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    setCart([]);
    navigate('/HomePage'); // الانتقال للـ HomePage بعد الشراء
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-[#D3D3FF] p-4">
          <h1 className="text-2xl font-bold text-white">Your Shopping Cart</h1>
        </div>

        <div className="p-6">
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-lg text-gray-600 mb-4">Your cart is empty</p>
              <Link
                to="/product"
                className="inline-block bg-[#D3D3FF] hover:bg-[#b8b8ff] text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div>
              <div className="divide-y divide-gray-200">
                {cartItems.map((product) => (
                  <div key={product.id} className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-20 h-20 object-contain border rounded-lg"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">{product.title}</h3>
                        <p className="text-[#D3D3FF] font-bold">
                          ${product.price.toFixed(2)} × {product.quantity} = ${product.totalPrice.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => addSingleItem(product)}
                        className="text-gray-500 hover:text-gray-700 font-bold text-xl p-2"
                        title="Add one"
                      >
                        +
                      </button>
                      <span className="text-gray-500">{product.quantity}</span>
                      <button
                        onClick={() => removeSingleItem(product)}
                        className="text-gray-500 hover:text-gray-700 font-bold text-xl p-2"
                        title="Remove one"
                      >
                        &minus;
                      </button>
                      <button
                        onClick={() => removeAllOfItem(product.id)}
                        className="text-red-400 hover:text-red-600 font-bold text-xl p-2"
                        title="Remove all"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xl font-semibold">Subtotal:</p>
                  <p className="text-xl font-bold text-[#D3D3FF]">${total.toFixed(2)}</p>
                </div>
                <p className="text-sm text-gray-500 mb-6">Shipping and taxes calculated at checkout</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/product"
                    className="flex-1 text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-md transition-colors"
                  >
                    Continue Shopping
                  </Link>
                  <button
                    onClick={handleCheckout}
                    className="flex-1 bg-[#D3D3FF] hover:bg-[#b8b8ff] text-white font-medium py-3 px-4 rounded-md transition-colors"
                  >
                    Checkout
                  </button>
                  <button
                    onClick={clearCart}
                    className="flex-1 bg-red-400 hover:bg-red-500 text-white font-medium py-3 px-4 rounded-md transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;