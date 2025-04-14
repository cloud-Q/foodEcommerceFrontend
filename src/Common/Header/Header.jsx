import React from 'react';
import './Header.scss';
// import brandLogo from '../../images/flat-design-shop-local-logo-template.png';
import cafeLogo from '../../images/logo.png';
import Searchbar from '../Header/Searchbar/Searchbar';
import { FiUser } from 'react-icons/fi';
import { GiShoppingCart } from 'react-icons/gi';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={cafeLogo} alt="Brand Logo" />
      </div>
      
      {/* <nav className="header__nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav> */}
      
      <Searchbar />
      
      <div className="header__icons">
        <FiUser className="header__icon" />
        <GiShoppingCart className="header__icon" />
      </div>
    </header>
  );
};

export default Header;