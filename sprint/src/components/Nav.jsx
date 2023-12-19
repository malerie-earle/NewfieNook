import { Link } from 'react-router-dom';
import ShoppingCart from '../components/ShoppingCart.jsx';
import Checkout from '../components/Checkout.jsx'; 
import '../styles/index.css';
import homeIcon from "../images/home_996426.png";
import cartIcon from "../images/cartIcon.png";
import checkoutIcon from "../images/checkoutIcon.png";
import nlcircle from "../images/NLcircle.png";
import newfieNook from "../images/newfienook2.png";
import "../styles/index.css";
import { useEffect, useState } from 'react'; 
import useFetch from "../hooks/useFetch.jsx";
import { useShoppingCart } from '../context/ShoppingCartContext.js';
import addCartIcon from "../images/addCart.png";


const Nav = () => {
  const [isCartVisible, setCartVisible] = useState(false);
  const { addToCart, updateQuantity, cartItems, removeFromCart } = useShoppingCart();
  const { data: products, loading, error } = useFetch('http://localhost:8080/products');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortButtonText, setSortButtonText] = useState('Price (Low to High)');
  const categories = [
    'Bath-and-Body',
    'Clothing',
    'Food-and-Drink',
    'Merchandise',
    'Seasonal'
  ];
  const [quantities, setQuantities] = useState({});
  let sortedProducts = [];
  const totalItemCount = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  // Shuffle products every render
  useEffect(() => {
    if (products) {
      const shuffled = shuffleArray(products);
      setShuffledProducts(shuffled);
    }
  }, [products]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };


  const sortProducts = () => {
    let sortedProducts = [...products]; // Using the original products for sorting
  
    // Sort by price
    sortedProducts = sortedProducts.sort((a, b) => {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
  
    // Filter by category if selectedCategory is set
    if (selectedCategory) {
      sortedProducts = sortedProducts.filter(product => product.category === selectedCategory);
    }
  
    setShuffledProducts(sortedProducts);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setSortButtonText(sortOrder === 'asc' ? 'Price (High to Low)' : 'Price (Low to High)');
  };
  
    
  
    const handleCategoryToggle = (category) => {
      setSelectedCategory(selectedCategory === category ? null : category);
    };
    

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
              <img className = "homeIcon" src = {homeIcon} alt = "Home"  />
            </div>
          </Link>

          <div className="navBox" onClick={handleCartButtonClick}>
            <img src = {cartIcon} alt = "Shopping Cart" className = "cartIcon" />
            {totalItemCount > 0 && <span>({totalItemCount})</span>}
          </div>

          <Link to = "/checkout">
          <div className="navBox">
            <img src = {checkoutIcon} alt = "Checkout" className = "checkoutIcon" />
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

<div className = "categories">
<h2>Categories:</h2>
<div className = "category"> 
 {categories.map((category, index) => (
<p key={index}>
<button
 key={index}
 className= "categoryBar"
 onClick={() => handleCategoryToggle(category)}
>
 {category}
</button>
</p>
))}
<button onClick={() => setSelectedCategory(null)}>Show All</button>

<div className = "sortBy">
<p className = "sortBy">Sort By : </p>
<button className = "sortBtn" onClick={sortProducts}>Price (High to Low)</button><p></p>
</div>
</div>
</div>
</div>
    </>
  );
};

export default Nav;