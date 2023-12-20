import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import "../styles/index.css";
const ProductDetailsModal = ({ product, onClose }) => {
  const { image, title, description } = product;
  const { closeProductDetails } = useShoppingCart(); // Use the hook to access context

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="closeBtn" onClick={onClose || closeProductDetails}>X</button>
        <h3 className='h3Title'>{title}</h3>
        <br />
        <div className="productImage">
          <img src={image} alt={title} />
        </div>
        <br />
        <div className="productDescription">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
