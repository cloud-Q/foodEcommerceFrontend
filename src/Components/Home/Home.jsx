import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.scss';
import Shop from './Shop/Shop';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://cloud-q.github.io/foodEcommerceBackend/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="home-main">
      <div className="categories-container">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category.category_id} className="category-box">
              {category.category_name}
            </div>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
      <Shop />
    </div>
  );
};

export default Home;
