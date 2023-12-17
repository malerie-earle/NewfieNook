import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import ShoppingCart from '../components/ShoppingCart.jsx';
import Checkout from '../components/Checkout.jsx'; // Import the new Checkout page
import '../styles/index.css';



const Nav = () => {
  const { cartItems, removeFromCart } = useShoppingCart();
  const [isCartVisible, setCartVisible] = useState(false);

  const handleCartButtonClick = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <>
      <nav>
        <div className="navBar">
          <Link to="/">
            <div className="navBox" id="nav1">
              <h3>Home</h3>
            </div>
          </Link>
          <div className="navBox button" onClick={handleCartButtonClick}>
            <h3>Cart</h3>({cartItems.length})
          </div>
        </div>
      </nav>
      {isCartVisible && (
        <div className="shoppingCartDropdown">
          <h2>Shopping Cart</h2>
          <div className="cartItems">
            <ShoppingCart />
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;