import React, { useState, useEffect } from 'react';
import Products from "../data/Products.JSON";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${Products}`) 
      .then(response => response.json())
      .then(data => {
        setProducts(data); 
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="productListHTML">
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img src={product.image} alt="image" className="image" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
