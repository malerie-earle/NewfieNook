import { useState, useEffect } from 'react';
import productsData from "../data/Products.JSON"; // Assuming this is the correct import path

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating an asynchronous fetch of data from JSON file
    const fetchData = async () => {
      try {
        // Fetching productsData asynchronously (replace with your actual fetch logic)
        const data = await fetch(productsData);
        const jsonData = await data.json();

        if (Array.isArray(jsonData)) {
          setProducts(jsonData); // Setting fetched data as products
        } else {
          console.error('Fetched data is not an array.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="productListHTML">
      <h2>Product List</h2><br />
      <div className="listedProduct">
        {products.map(product => (
          <div className="items" key={product.id}>
            <img src={product.image} alt={product.title} className="image" /><br />
            <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
