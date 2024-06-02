// src/components/userManagement/UserManagement.jsx
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import UserList from './UserList';
import AddUser from './AddUser';
import EditUser from './EditUser';

const UserManagement = () => {
  return (
    <div className="user-management">
      <h2>User Management</h2>
      <nav>
        <ul>
          <li><Link to="/admin/users">User List</Link></li>
          <li><Link to="/admin/users/add">Add New User</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default UserManagement;
