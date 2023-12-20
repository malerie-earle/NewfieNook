import "../styles/index.css";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch.jsx";
import { useShoppingCart } from "../context/ShoppingCartContext.js";
import addCartIcon from "../images/addCart.png";
import ScrollToTop from "react-scroll-to-top";
import ProductDetailsModal from "../components/ProductDetails.jsx";
import github from "../images/github.png";
const Home = () => {
  const { data: products, loading, error } = useFetch('http://localhost:8080/products');
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortButtonText, setSortButtonText] = useState("Price (Low to High)");
  const { addToCart, updateQuantity, cartItems } = useShoppingCart();
  const [quantities, setQuantities] = useState({});
  const [showAddedToCartAlert, setShowAddedToCartAlert] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product for modal
  const chimeSound = new Audio('/AddtoCart.mp3');
  const categories = [
    'Clothing',
    'Food-and-Drink',
    'Merchandise',
    'Seasonal'
  ];

  useEffect(() => {
    if (products) {
      const shuffled = shuffleArray(products);
      setShuffledProducts(shuffled);
      setDisplayedProducts(shuffled);      
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
    let sortedProducts = [...displayedProducts];
    sortedProducts = sortedProducts.sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    const buttonText = sortOrder === "asc" ? "Price: Low to High" : "Price: High to Low";
    setSortButtonText(buttonText);
    setDisplayedProducts(sortedProducts);
  };

  const handleCategoryToggle = (category) => {
    let updatedCategories = selectedCategory && selectedCategory.includes(category) ?
      selectedCategory.filter((selected) => selected !== category) : 
      selectedCategory ? [...selectedCategory, category] : [category];
    setSelectedCategory(updatedCategories);
    let filteredProducts = updatedCategories.length === 0 ? shuffledProducts : 
      shuffledProducts.filter((product) => updatedCategories.includes(product.category));
    setDisplayedProducts(filteredProducts);
  };

  const handleQuantityChange = (product, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: quantity,
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addToCart(product, quantity);
    chimeSound.play();
    setTimeout(() => {
      setShowAddedToCartAlert(false);
    }, 3000);
    setQuantities((prevQuantities) => ({ ...prevQuantities, [product.id]: 1 }));
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {showAddedToCartAlert && (
        <div className="addedToCartAlert">
          Added to cart!
        </div>
      )}

      <div className="categories">
        <div className="category"> 
          {categories.map((category, index) => (
            <p key={index}>
              <button
                key={index}
                className={selectedCategory && selectedCategory.includes(category) ? "categoryBar categoryBarSelect" : "categoryBar"}
                onClick={() => handleCategoryToggle(category)}
              >
                {category}
              </button>
            </p>
          ))}

          <button
            className="showAllBtn"
            onClick={() => {
              setDisplayedProducts(shuffledProducts);
              handleCategoryToggle(null);
            }}
          >
            Show All
          </button>

          <h2 className="sortBy">Sort By: </h2>
          <button className="sortBtn" onClick={sortProducts}>
            {sortButtonText}
          </button>
        </div>
      </div>

      <div className="productList">
        <div className="listedProduct">
          {displayedProducts.map((product) => (
            <div className="item" key={product.id}>
              <div className="productTitle">
                <h3 className="h3Title">{product.title}</h3>
              </div>

              <div className="productImage">
                <img
                  src={product.image}
                  alt={product.title}
                  className="image"
                  onClick={() => handleProductClick(product)}
                />
              </div>

              <p className="productPrice">${product.price}</p>
              <div className="productDetails">
                <div className="productActions">
                  <label>
                    Qty:
                    <input
                      className="qtyInput"
                      type="number"
                      min="1"
                      value={quantities[product.id] || 1}
                      onChange={(e) => handleQuantityChange(product, parseInt(e.target.value, 10))}
                    />
                  </label>
                  <div className="addCartBtn">
                    <button
                      className="addCartBtn"
                      onClick={() => handleAddToCart(product)}
                    >
                      <img
                        src={addCartIcon}
                        alt="Add to Cart"
                        className="icon"
                        id="addCartIcon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
      <footer>
        <ScrollToTop smooth className = "scrollTop" />
        <p>
        © Copyright Python Pink - 2023
        </p>
        <a href = "https://github.com/RyanGuinchard/Semester2-Final-Sprint/" target="_blank" >
        <img src = {github} alt = "GitHub Repo" className = "githubImg" /></a>
<div className = "collaborators">

<a href = "#" target="_blank">
<h3 className = "collaborators">Christopher Cormier</h3></a><br />

<a href = "#" target="_blank">
<h3 className = "collaborators">Malerie Earle</h3></a><br />

<a href = "https://ryanguinchard.github.io/Portfolio2023-2024/" target="_blank">
<h3 className = "collaborators">Ryan Guinchard</h3></a><br />

<a href = "http://justins-portfolio.netlify.app" target="_blank">
<h3 className = "collaborators">Justin Whelan</h3></a><br />
</div>
        
      </footer>
    </>
  );
};

export default Home;
