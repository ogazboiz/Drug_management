import React from 'react';
import '../../css/Login.css'; 
import { FaUserShield } from 'react-icons/fa';
const LoginAdmin = () => {
  return (
    <div className="login-page mb-">
      <h2><FaUserShield/> Admin Login</h2>
      <form>
        <label>Email:</label>
        <input type="email"  required />
        <label>Password:</label>
        <input type="password" required />
        <button type="submit">Log In</button>
      </form>
    
    </div>
  );
};

export default LoginAdmin;
