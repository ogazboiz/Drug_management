// src/components/navbar/Navbar.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/navbar.css';
import { FaBolt, FaHome, FaInfoCircle, FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleNavigation = (sectionId) => {
    navigate('/').then(() => {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="path_to_your_logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-menu" style={{
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'space-between',
        width: '35%',
      
      }}>
        <li className="navbar-item text-sm">
          <Link to="/" onClick={() => handleNavigation('home')}><FaHome/> Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/#features" onClick={() => handleNavigation('features')}><FaBolt/> Features</Link>
        </li>
        <li className="navbar-item">
          <Link to="/#about" onClick={() => handleNavigation('about')}><FaInfoCircle/> About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/#contact" onClick={() => handleNavigation('contact')}><FaPhone/> Contact</Link>
        </li>
      </ul>
      <div className="navbar-auth">
        <div className="dropdown">
          <button className="login-button" onClick={toggleDropdown}>
            Log In <span className="arrow-down">▼</span>
          </button>
          {isDropdownVisible && (
            <div className="dropdown-content">
              <Link to="/login/admin">Admin</Link>
              <Link to="/login/pharmacy">Pharmacy Manager</Link>
              <Link to="/login/healthcare">Healthcare Provider</Link>
              <Link to="/login/patient">Patient</Link>
            </div>
          )}
        </div>
        <Link to="/signup" className="signup-button">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
