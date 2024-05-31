import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route path="/login/pharmacy" element={<LoginPharmacy />} />
        <Route path="/login/healthcare" element={<LoginHealthcare />} />
        <Route path="/login/patient" element={<LoginPatient />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/admin" element={<SignupAdmin />} />
        <Route path="/signup/pharmacy" element={<SignupPharmacy />} />
        <Route path="/signup/healthcare" element={<SignupHealthcare />} />
        <Route path="/signup/patient" element={<SignupPatient />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
