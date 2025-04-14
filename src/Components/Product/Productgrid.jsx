import React, { useRef, useEffect } from 'react';
import './Productgrid.scss';
import ProductCard from '../Product/ProductCard/Productcard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProductGrid = ({ subcategories = [], onAddToCart }) => {
  // We'll have one ref per subcategory for scrolling.
  const scrollRefs = useRef([]);

  useEffect(() => {
    // Auto-scroll each subcategory every 3 seconds.
    const intervals = scrollRefs.current.map((ref, idx) => {
      return setInterval(() => {
        if (ref) {
          // If at the end of scroll, reset to beginning
          if (ref.scrollLeft + ref.clientWidth >= ref.scrollWidth) {
            ref.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            ref.scrollBy({ left: 260, behavior: 'smooth' });
          }
        }
      }, 3000);
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  // Manual scroll button
  const scroll = (index, direction) => {
    const ref = scrollRefs.current[index];
    if (ref) {
      const amount = direction === 'left' ? -260 : 260;
      ref.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="product-grid">
      {subcategories.length > 0 ? (
        subcategories.map((subcategory, index) => (
          <div key={subcategory.subcategory_id} className="subcategory-section">
            <div className="subcategory-header">
              <h3 className="subcategory-title">{subcategory.subcategory_name}</h3>
              <div className="slider-controls">
                <button onClick={() => scroll(index, 'left')}>
                  <FaArrowLeft />
                </button>
                <button onClick={() => scroll(index, 'right')}>
                  <FaArrowRight />
                </button>
              </div>
            </div>
            <div 
              className="subcategory-products"
              ref={(el) => (scrollRefs.current[index] = el)}
            >
              {subcategory.products.map((product) => (
                <ProductCard 
                  key={product.product_id} 
                  product={product} 
                  onAddToCart={onAddToCart} 
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductGrid;
