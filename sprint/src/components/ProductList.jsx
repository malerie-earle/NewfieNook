// import useFetch from "../hooks/useFetch.jsx";
// import "../styles/index.css";
// import { useState, useEffect } from "react";
// import { useShoppingCart } from '../context/ShoppingCartContext.js';



// const ProductList = () => {
//   const { data: products, loading, error } = useFetch('http://localhost:8080/products');
//   const { addToCart, updateQuantity, cartItems } = useShoppingCart();
//   const [shuffledProducts, setShuffledProducts] = useState([]);
//   const [quantities, setQuantities] = useState({});
//   const [showMore, setShowMore] = useState([]);
//   const [sortOrder, setSortOrder] = useState('asc');
//   const { cartCount } = useShoppingCart();

//   useEffect(() => {
//     if (products) {
//       const shuffled = shuffleArray(products);
//       setShuffledProducts(shuffled);
//       setShowMore(Array(shuffled.length).fill(false));
//     }
//   }, [products]);

//   const sortProducts = () => {
//     const sortedProducts = [...shuffledProducts].sort((a, b) => {
//       return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
//     });
//     setShuffledProducts(sortedProducts);
//     setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//   };

//   const handleToggleDescription = (index) => {
//     const updatedShowMore = [...showMore];
//     updatedShowMore[index] = !updatedShowMore[index];
//     setShowMore(updatedShowMore);
//   };

//   const handleQuantityChange = (product, quantity) => {
//     setQuantities((prevQuantities) => ({ ...prevQuantities, [product.id]: quantity }));
//   };

//   const handleAddToCart = (product) => {
//     const quantity = quantities[product.id] || 1;
//     const existingItem = cartItems.find((item) => item.id === product.id);

//     if (existingItem) {
//       updateQuantity(product.id, existingItem.quantity + quantity);
//     } else {
//       addToCart({ ...product, quantity });
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   if (!products || products.length === 0) {
//     return <p>No products available.</p>;
//   }

//   return (
//     <>
//       <div className="productListHTML">
//       <button onClick={sortProducts}>Sort Products</button>
//         <div className="listedProduct">
//           {shuffledProducts.map((product, index) => (
//             <div className="item" key={product.id}>
//               <div className="itemDetails">
//                 <h2 className="productTitle">{product.title}</h2>
//                 <div className="productImage">
//                   <img src={product.image} alt={product.title} className="image" />
//                 </div>
  
//                 <p className="productPrice">{product.price}</p>
//                 <div className="quantityWrapper">
//                   <label>
//                     Qty:
//                     <input
//                       type="number"
//                       min="1"
//                       value={quantities[product.id] || 1}
//                       onChange={(e) => handleQuantityChange(product, parseInt(e.target.value, 10))}
//                     />
//                   </label>
//                 </div>
//                 <button className="addCartBtn" onClick={() => handleAddToCart(product)}>
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductList;
