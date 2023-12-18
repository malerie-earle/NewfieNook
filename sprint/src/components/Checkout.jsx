import React, { useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

const Checkout = ({ onBackToCart }) => {
  const { cartItems } = useShoppingCart();
  const [name, setName] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');

  // Calculate the total price
  const totalCartPrice = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQuantity = parseInt(item.quantity, 10) || 0;
    return total + itemPrice * itemQuantity;
  }, 0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePaymentInfoChange = (e) => {
    setPaymentInfo(e.target.value);
  };

  const handlePlaceOrder = () => {
    // Handle the order placement logic here
    console.log(`Name: ${name}, Payment Info: ${paymentInfo}`);
  };

  return (
    <div className = "homeCheckout">
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="totalPrice">
        <p>Total Price: ${totalCartPrice.toFixed(2)}</p>
      </div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        <br />
        <label htmlFor="paymentInfo">Payment Info:</label>
        <input type="text" id="paymentInfo" value={paymentInfo} onChange={handlePaymentInfoChange} />
        <br />
        <button type="button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </form>
      <button onClick={onBackToCart}>Back to Cart</button>
    </div>
    </div>
  );
};

export default Checkout;
