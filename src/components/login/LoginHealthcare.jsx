import React from 'react';
import '../../css/Login.css'; 
const LoginHealthcare = () => {
  return (
    <div className="login-page">
      <h2>Healthcare Provider Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" required />
        <label>Password:</label>
        <input type="password" required />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginHealthcare;
