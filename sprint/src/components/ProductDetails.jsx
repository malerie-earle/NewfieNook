import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

const ProductDetailsModal = ({ product, onClose }) => {
  const { image, title, description } = product;
  const { closeProductDetails } = useShoppingCart(); // Use the hook to access context

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="closeBtn" onClick={onClose || closeProductDetails}>X</button>
        <div className="productImage">
          <img src={image} alt={title} />
        </div>
        <div className="productDescription">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
