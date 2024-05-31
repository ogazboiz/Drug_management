import React from 'react';
import { Link } from 'react-router-dom';
import '../css/signup.css'; // Import CSS file for styling

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <p>Please select your role to sign up:</p>
      <div className="role-selection">
        <Link to="/signup/admin" className="role-button">Admin</Link>
        <Link to="/signup/pharmacy" className="role-button">Pharmacy Manager</Link>
        <Link to="/signup/healthcare" className="role-button">Healthcare Provider</Link>
        <Link to="/signup/patient" className="role-button">Patient</Link>
      </div>
      <p>Already have an account? <Link to="/login" className="login-link">Log in here</Link></p>
    </div>
  );
};

export default Signup;
