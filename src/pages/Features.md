import React from 'react';
import Navbar from '../components/navbar/Navbar';
import '../css/HomePage.css';
function Features() {
  return (
    <>
      <Navbar />
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Inventory Management</h3>
            <p>Automate tracking of drug inventory to maintain optimal stock levels.</p>
          </div>
          <div className="feature-item">
            <h3>Procurement Process</h3>
            <p>Streamline procurement requests and orders to ensure timely restocking.</p>
          </div>
          <div className="feature-item">
            <h3>Drug Information Lookup</h3>
            <p>Access detailed and up-to-date drug information for better decision making.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
