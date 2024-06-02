// src/components/dashboards/AdminDashboard.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../../css/AdminDashboard.css';
import PharmacySidebar from '../pharmacySidebar/PharmacySidebar';
import Inventory from '../pharmacySidebar/InventoryManagement';
import Customers from '../pharmacySidebar/Customers';
import Sales from '../pharmacySidebar/Sales';
import Prescriptions from '../pharmacySidebar/Prescriptions';
import Reports from '../pharmacySidebar/Reports';




const PharmacyDashboard = () => {
  return (
    <div className="admin-dashboard">
      <PharmacySidebar/>
      <div className="main-content">
      <Routes>
        
          <Route path="inventory-management" element={<Inventory />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="sales" element={<Sales/>} />
          <Route path="customers" element={<Customers />} />
          <Route path="reports" element={<Reports />} />

        </Routes>
      </div>
    </div>
  );
};

export default PharmacyDashboard;
