// src/components/dashboards/AdminDashboard.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../../css/AdminDashboard.css';
import Sidebar from '../sidebar/Sidebar';
import Overview from '../sidebar/Overview';
import UserManagement from '../sidebar/UserManagement';
import InventoryManagement from '../sidebar/InventoryManagement';
import Reports from '../sidebar/Reports';
import Settings from '../sidebar/Settings';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="overview" element={<Overview />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="inventory-management" element={<InventoryManagement />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
