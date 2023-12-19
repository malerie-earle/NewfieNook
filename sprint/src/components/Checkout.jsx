import React, { useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems } = useShoppingCart();
  const [name, setName] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const navigate = useNavigate();

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
    setShowThankYouPopup(true);
  };

  const closeThankYouPopup = () => {
    setShowThankYouPopup(false);
    navigate('/'); // Optionally navigate to a different page
  };
  const handleBackToCartClick = () => {
    navigate(-1); // Navigate to the cart page
  };
  return (
    <div className="homeCheckout">
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
        <button onClick={handleBackToCartClick}>Back to Cart</button>
      </div>

      {showThankYouPopup && (
        <div className="thankYouPopup">
          <div className="popupContent">
            <h2>Thank You for Placing Your Order, {name}!</h2>
            <p>Check your email for shipping details.</p>
            <button onClick={closeThankYouPopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
