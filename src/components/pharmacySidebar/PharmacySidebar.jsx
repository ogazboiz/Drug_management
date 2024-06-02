// src/components/sidebar/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/Sidebar.css";

const PharmacySidebar = () => {
  return (
    <div className="sidebar">
      <h2>Pharmacy</h2>
      <ul>
        <li>
          <NavLink to="inventory-management" activeClassName="active">
            Inventory Management
          </NavLink>
        </li>
        <li>
          <NavLink to="prescriptions" activeClassName="active">
            Prescription Processing
          </NavLink>
        </li>
        <li>
          <NavLink to="sales" activeClassName="active">
            {" "}
            Sales Tracking
          </NavLink>
        </li>
        <li>
          <NavLink to="customers" activeClassName="active">
            Customer Management
          </NavLink>
        </li>
        <li>
          <NavLink to="reporting" activeClassName="active">
            Reporting
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default PharmacySidebar;
