import React from 'react';
import '../../css/Login.css'; 
const LoginPatient = () => {
  return (
    <div className="login-page">
      <h2>Patient Login</h2>
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

export default LoginPatient;