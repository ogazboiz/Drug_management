// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginAdmin from './components/login/LoginAdmin';
import LoginPharmacy from './components/login/LoginPharmacy';
import LoginHealthcare from './components/login/LoginHealthcare';
import LoginPatient from './components/login/LoginPatient';
import SignupAdmin from './components/signup/SignupAdmin';
import SignupPharmacy from './components/signup/SignupPharmacy';
import SignupHealthcare from './components/signup/SignupHealthcare';
import SignupPatient from './components/signup/SignupPatient';
import Signup from './pages/SignUp';
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/Navbar';
import AdminDashboard from './components/dashboards/AdminDashboard';
import PharmacyDashboard from './components/dashboards/PharmacyDashboard';
import HealthcareDashboard from './components/dashboards/HealthcareDashboard';
import PatientDashboard from './components/dashboards/PatientDashboard';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');

  const handleAuthentication = (status, role) => {
    setIsAuthenticated(status);
    setUserRole(role);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/admin" element={<LoginAdmin handleAuthentication={handleAuthentication} />} />
        <Route path="/login/pharmacy" element={<LoginPharmacy handleAuthentication={handleAuthentication} />} />
        <Route path="/login/healthcare" element={<LoginHealthcare handleAuthentication={handleAuthentication} />} />
        <Route path="/login/patient" element={<LoginPatient handleAuthentication={handleAuthentication} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/admin" element={<SignupAdmin />} />
        <Route path="/signup/pharmacy" element={<SignupPharmacy />} />
        <Route path="/signup/healthcare" element={<SignupHealthcare />} />
        <Route path="/signup/patient" element={<SignupPatient />} />
        <Route
          path="/dashboard/admin/*"
          element={
            isAuthenticated && userRole === 'admin' ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/dashboard/pharmacy/*"
          element={
            isAuthenticated && userRole === 'pharmacy' ? (
              <PharmacyDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/dashboard/healthcare/*"
          element={
            isAuthenticated && userRole === 'healthcare' ? (
              <HealthcareDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/dashboard/patient/*"
          element={
            isAuthenticated && userRole === 'patient' ? (
              <PatientDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
