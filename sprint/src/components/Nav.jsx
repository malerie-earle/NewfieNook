import { Link } from 'react-router-dom';
import ShoppingCart from '../components/ShoppingCart.jsx';
import Checkout from '../components/Checkout.jsx'; 
import homeIcon from "../images/home_996426.png";
import cartIcon from "../images/cartIcon.png";
import checkoutIcon from "../images/checkoutIcon.png";
import nlcircle from "../images/NLcircle.png";
import newfieNook from "../images/newfienook2.png";
import "../styles/index.css";
import { useEffect, useState } from 'react'; 
import useFetch from "../hooks/useFetch.jsx";
import { useShoppingCart } from '../context/ShoppingCartContext.js';


const Nav = () => {
  const [isCartVisible, setCartVisible] = useState(false);
  const { addToCart, updateQuantity, cartItems, removeFromCart } = useShoppingCart();
  const { data: products, loading, error } = useFetch('https://shimmer-chivalrous-rhubarb.glitch.me/products');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [quantities, setQuantities] = useState({});
  let sortedProducts = [];
  const totalItemCount = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
    

  const handleQuantityChange = (product, quantity) => {
    setQuantities((prevQuantities) => ({ ...prevQuantities, [product.id]: quantity }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + quantity);
    } else {
      addToCart({ ...product, quantity });
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const handleCartButtonClick = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <>
      <nav>
        <div className="navBar">

          <Link to="/">
            <div className="navBox" id="nav1">
              <img className = "icon" id = "homeIcon" src = {homeIcon} alt = "Home"  />
            </div>
          </Link>

          <div className = "navBox" onClick={handleCartButtonClick}>
            <img src = {cartIcon} alt = "Shopping Cart" className = "icon" id = "cartIcon" />
            {totalItemCount > 0 && <span>({totalItemCount})</span>}
          </div>

          <Link to = "/checkout">
          <div className="navBox">
            <img src = {checkoutIcon} alt = "Checkout" className  = "icon" id = "checkoutIcon" />
          </div></Link>
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
      <div className="home">

<div className = "nlPic">
<div className="banner">
   <img src={nlcircle} alt="NL Circle" className="nlCircle" />
   <img src={newfieNook} alt="Newfie Nook Title" className="newfieNookTitle" />
 </div>
 </div>
</div>
    </>
  );
};

export default Nav;