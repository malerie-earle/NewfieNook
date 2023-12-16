import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet
import { useShoppingCart } from '../context/ShoppingCartContext';
import ShoppingCart from '../components/ShoppingCart.jsx';
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
          <br />
          <div className="navBox button" onClick={handleCartButtonClick}>
            <h3>Cart </h3>({cartItems.length})
          </div>
        </div>
      </nav>
      {isCartVisible && (
        <div className="shoppingCartDropdown">
          <h2>Shopping Cart</h2>
          <div className="cartItems">
            {cartItems.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Price: {item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
              </div>
            ))}
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Nav;


 {/* I have the Checkout link ready to uncomment once it is active. 
          Was throwing an error for me bc it was an empty link, 
          Love you all <3 especially you ryan*/}
          {/* <Link to="/checkout">
            <div className="navBox">
              <h3>Checkout</h3>
            </div>
          </Link> */}
          // jsx hates comments lol - malerie

                  {/* <div class="wrap">
                  <div class="search">
                    <input type="text" class="searchTerm" placeholder="Search..." />
                    <button type="submit" class="searchButton">
                      <i class="fa fa-search">
                          <img src = "Images/search_icon_125165.png" id = "searchIcon" /> 
                      </i>
                    </button>
                  </div>
              </div> */}
                        {/* <Link to="/cart">
            <div className="navBox">
              <h3>Cart</h3>
            </div>
          </Link> */}