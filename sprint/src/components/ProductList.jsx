import React, { useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext.js';
import useFetch from '../hooks/useFetch.jsx';
import '../styles/index.css';

const ProductList = () => {
  const { data: products, loading, error } = useFetch('http://localhost:8080/products');
  const { addToCart, updateQuantity, cartItems } = useShoppingCart();

  const [showMore, setShowMore] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleToggleDescription = (index) => {
    const updatedShowMore = [...showMore];
    updatedShowMore[index] = !updatedShowMore[index];
    setShowMore(updatedShowMore);
  };

  const handleQuantityChange = (product, quantity) => {
    setQuantities((prevQuantities) => ({ ...prevQuantities, [product.id]: quantity }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;

    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If item already exists in the cart, update its quantity
      updateQuantity(product.id, existingItem.quantity + quantity);
    } else {
      // If item doesn't exist, add it to the cart with the specified quantity
      addToCart({ ...product, quantity });
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="productListHTML">
      <div className="listedProduct">
        {products.map((product, index) => (
          <div className="item" key={product.id}>
            <img src={product.image} alt={product.title} className="image" />
            <div className="itemDetails">
              <h2>{product.title}</h2>

              {/* Conditionally render Show More button */}
              {product.description.length > 140 && (
                <button onClick={() => handleToggleDescription(index)}>
                  {showMore[index] ? 'Show Less' : 'Show More'}
                </button>
              )}

              {/* Description */}
              <p className="description">
                {showMore[index]
                  ? product.description
                  : `${product.description.slice(0, 140)}...`}
              </p>

              <p>Price: {product.price}</p>

              {/* Updated quantity input */}
              <div className="quantityWrapper">
                <label>
                  Quantity:
                  <input
                    type="number"
                    min="1"
                    value={quantities[product.id] || 1}
                    onChange={(e) => handleQuantityChange(product, parseInt(e.target.value, 10))}
                  />
                </label>
              </div>

              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
