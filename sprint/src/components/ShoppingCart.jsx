import React, { useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import Checkout from './Checkout.jsx';

const ShoppingCart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useShoppingCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const handleRemoveClick = (itemId) => {
    removeFromCart(itemId);
  };

  const handleCheckoutClick = () => {
    setShowCheckout(true);
  };

  const handleBackToCart = () => {
    setShowCheckout(false);
  };

  const totalCartPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price) || 0; // Parse price as a float
    const itemQuantity = parseInt(item.quantity, 10) || 0; // Parse quantity as an integer
    return total + itemPrice * itemQuantity;
  }, 0);

  return (
    <div className="shoppingCart">
      <div className="checkoutSection">
        {!showCheckout && (
          <button onClick={handleCheckoutClick}>Checkout</button>
        )}
      </div>
      <div className="cartItemsContainer">
        {showCheckout ? (
          <Checkout onBackToCart={handleBackToCart} />
        ) : (
          <>
            {cartItems.length > 0 ? (
              <>
                <div className="cartItems">
                  {cartItems.map((item) => (
                    <div key={item.id}>
                      <h3>{item.title}</h3>
                      <p>Price: ${item.price}</p>
                      <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                      <input
                        type="number"
                        id={`quantity-${item.id}`}
                        value={item.quantity}
                        min="1"
                        data-testid={`quantity-input-${item.id}`} // test wanted this. Remove if error occurs.
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                      />
                      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                      <button onClick={() => handleRemoveClick(item.id)}>Remove from Cart</button>
                    </div>
                  ))}
                </div>
                <div className="totalPrice">
                  <p>Total Price: ${totalCartPrice.toFixed(2)}</p>
                </div>
              </>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;

