// ShoppingCart.jsx
import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

// ShoppingCart.jsx

// ... other code ...

const ShoppingCart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useShoppingCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const handleRemoveClick = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <div className="shoppingCart">
      <h2>Shopping Cart</h2>
      <div className="cartItems">
        {cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: {item.price}</p>
            <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
            <input
              type="number"
              id={`quantity-${item.id}`}
              value={item.quantity}
              min="1"
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
            />
            <p>Total: {item.price * item.quantity}</p>
            <button onClick={() => handleRemoveClick(item.id)}>Remove from Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;

