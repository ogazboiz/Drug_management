import React from 'react';
import '../../css/Footer.css';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 style={{
            marginLeft: '120px'
          }}>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main Street, Anytown, USA</p>
        </div>
        <div className="footer-section">
          <h3 style={{
            marginLeft: '80px'
          }}>Follow Us</h3>
          <ul className="social-media " style={{
            display: 'flex',
            listStyle: 'none',
            justifyContent: 'space-around',
            flexDirection: 'column',
            width: '50%',
            marginLeft: '50px'
          }}>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook/> Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter/> Twitter</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin/> LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Drug Procurement and Distribution Tracking System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
