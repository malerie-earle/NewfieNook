import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ShoppingCart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useShoppingCart();
  const navigate = useNavigate(); // Create navigate function

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const handleRemoveClick = (itemId) => {
    removeFromCart(itemId);
  };

  const handleCheckoutClick = () => {
    navigate('/checkout'); // Navigate to checkout page
  };
  const handleBackToCartClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  // Calculate the total cart price
  const totalCartPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQuantity = parseInt(item.quantity, 10) || 0;
    return total + itemPrice * itemQuantity;
  }, 0);

  return (
    <div className="shoppingCart">
      <div className="checkoutSection">
        <button onClick={handleCheckoutClick}>Checkout</button>
      </div>
      <div className="cartItemsContainer">
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
                    data-testid={`quantity-input-${item.id}`}
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
      </div>
    </div>
  );
};

export default ShoppingCart;
