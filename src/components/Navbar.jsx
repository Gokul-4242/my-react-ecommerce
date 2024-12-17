import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">E-Commerce</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart ({cartCount})</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
