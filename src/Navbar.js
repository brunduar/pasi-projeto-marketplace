// Navbar.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import cartIcon from './cart-icon.png';
import './Navbar.css';
import { CartContext } from './CartContext';

const Navbar = ({ onSearch }) => {
  const { cartItemCount } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <div className="navbar-search">
          <input type="text" placeholder="Search products" onChange={onSearch} />
        </div>
        <div className="navbar-cart">
          <Link to="/cart">
            <img src={cartIcon} alt="Cart" className="cart-icon" />
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </Link>
        </div>
        <div className="navbar-login">
          <Link to="/login">
            <button type="button">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
