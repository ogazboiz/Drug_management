// src/components/sidebar/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin</h2>
      <ul>
        <li><NavLink to="overview" activeClassName="active">Overview</NavLink></li>
        <li><NavLink to="user-management" activeClassName="active">User Management</NavLink></li>
        <li><NavLink to="inventory-management" activeClassName="active">Inventory Management</NavLink></li>
        <li><NavLink to="reports" activeClassName="active">Reports</NavLink></li>
        <li><NavLink to="settings" activeClassName="active">Settings</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
