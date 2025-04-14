import React, { useState } from 'react';
import './Productcard.scss';
import { IoMdAdd, IoMdRemove } from "react-icons/io";

const ProductCard = ({ product, onAddToCart }) => {
  const { product_name, images, previous_price, current_price, available, discount } = product;
  const [quantity, setQuantity] = useState(1);

  // Get the default image (if none is explicitly set, fallback to first image)d
  const defaultImage = images.find(img => img.isDefault) || images[0];

  const handleIncrement = () => setQuantity(qty => qty + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(qty => qty - 1);
  };

  const handleAddToCart = () => {
    // Pass product with the selected quantity
    onAddToCart({ ...product, quantity });
  };

  return (
    <div className="product-card">
      {discount && (
        <div className="discount-banner">
          {discount}% OFF
        </div>
      )}
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img 
          src={defaultImage.url} 
          alt={product_name} 
          className="product-card__image" 
        />
      </a>
      <div className="product-card__info">
        <h3 className="product-card__name">{product_name}</h3>
        <div className="product-card__prices">
          <span className="product-card__previous-price">${previous_price}</span>
          <span className="product-card__current-price">${current_price}</span>
        </div>
        <div className="product-card__availability">
          {available ? "In Stock" : "Out of Stock"}
        </div>
        <div className="quantity-container">
          <button 
            className="quantity-btn" 
            onClick={handleDecrement} 
            disabled={quantity <= 1}
          >
            <IoMdRemove />
          </button>
          <span className="quantity-value">{quantity}</span>
          <button className="quantity-btn" onClick={handleIncrement}>
            <IoMdAdd />
          </button>
        </div>
        <button 
          className="product-card__btn" 
          onClick={handleAddToCart}
          disabled={!available}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
