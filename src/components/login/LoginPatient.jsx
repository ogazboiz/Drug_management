

import React, { useState } from 'react';
import users from '../../data/users';
import '../../css/Login.css'; 
const LoginPatient = ({ handleAuthentication }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.role === 'patient' && u.username === username && u.password === password);
    if (user) {
      handleAuthentication(true, 'patient');
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Patient Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LoginPatient;
