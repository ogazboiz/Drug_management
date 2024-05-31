import React from 'react';
import Navbar from '../components/navbar/Navbar';

function About() {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <h1>About Us</h1>
        <p>Information about the company...</p>
      </div>
    </>
  );
}

export default About;
