import { useState, useEffect } from 'react';
import productsData from "../data/Products.JSON";
import { useShoppingCart } from '../context/ShoppingCartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useShoppingCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(productsData);
        const jsonData = await data.json();

        if (Array.isArray(jsonData)) {
          setProducts(jsonData);
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
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;