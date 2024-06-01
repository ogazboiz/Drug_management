// src/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, userRole, role, children }) => {
  return isAuthenticated && userRole === role ? children : <Navigate to="/" />;
};

export default PrivateRoute;
