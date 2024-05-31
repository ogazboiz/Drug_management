import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/signupothers.css'; // Import CSS file for styling

const SignupAdmin = () => {
  return (
    <div className="signup-container">
      <h2>Admin Sign Up</h2>
      <form className="signup-form">
        <label>Email:</label>
        <input type="email" required />
        <label>Password:</label>
        <input type="password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login/admin">Log in</Link></p>
    </div>
  );
};

export default SignupAdmin;
