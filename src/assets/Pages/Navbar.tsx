import React from 'react';
import { Link } from 'react-router-dom';
import navbarlogo from '../Images/Navbarlogo.jpg';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <div className="content-wrapper"> {/* Outer wrapper to center-align */}
      <div className="navbar">
        <div className="navbar-container">
          {/* Logo Image */}
          <img className="navbar-logo" alt="Navbar Logo" src={navbarlogo} />

          {/* Navigation Links */}
          <ul className="navbar-links">
            <li><Link to="/" className="navbar-link">Home</Link></li>
            <li><Link to="/about" className="navbar-link">About</Link></li>
            <li><Link to="/works" className="navbar-link">Works</Link></li>
            <li><Link to="/blog" className="navbar-link">Blog</Link></li>
            <li><Link to="/contact" className="navbar-link">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

