import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductGrid from '../../Product/Productgrid';

const Shop = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Adjust the URL to match your API endpoint for categories data
        const response = await axios.get('https://food-ecommerce-backend.vercel.app/api/categories');
        // const response = await axios.get('http://localhost:5000/api/categories');
        setCategoriesData(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  if (categoriesData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <h1 style={{ paddingLeft: "50px" }}>Shop Our Products</h1> */}
      {categoriesData.map((category) => (
        <div key={category.category_id}>
          <h2 style={{ paddingLeft: "50px" }}>{category.category_name}</h2>
          <ProductGrid 
            subcategories={category.subcategories || []} 
            onAddToCart={handleAddToCart} 
          />
        </div>
      ))}
    </div>
  );
};

export default Shop;
