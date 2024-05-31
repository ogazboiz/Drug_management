import React from 'react';
import '../../css/HomePage.css';
import heroImage from '../../assets/images/hero-image.png';



function Homepage() {
  return (
    <div className="homepage">
      <section className="hero-section">
        
        <div className="hero-content">
          {/* <h1>Comprehensive Long-Term Pharmacy for Better Health</h1>
          <p>Medication management and pharmacy care for people who have chronic conditions, take multiple prescription medications, and receive care from multiple providers.</p>
       */}
          <h1>Welcome to the Drug Procurement and Distribution Tracking System</h1>
          <p>Enhancing healthcare efficiency and patient safety through advanced drug management.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Pharmacist" />
        </div>
      </section>
        {/* Features Section */}
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

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>We are dedicated to improving healthcare efficiency and patient safety through advanced drug management solutions. Our system is designed to provide fast access to drug information, streamline inventory control, and support healthcare providers in delivering the best possible care.</p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any inquiries, feel free to contact us using the form below:</p>
        <form className="contact-form">
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Message:</label>
          <textarea name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
      
    </div>
  )
}

export default Homepage

