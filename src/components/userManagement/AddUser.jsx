// src/components/userManagement/AddUser.jsx
import React, { useState } from 'react';
import '../../css/UserManagement.css';

const AddUser = () => {
  const [user, setUser] = useState({ name: '', email: '', role: '', contactNumber: '', status: 'Active' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add user to the database
    console.log('User added:', user);
  };

  return (
    <div className="add-user">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={user.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleChange} required />
        </label>
        <label>
          Role:
          <select name="role" value={user.role} onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Pharmacy Manager">Pharmacy Manager</option>
            <option value="Healthcare Provider">Healthcare Provider</option>
            <option value="Patient">Patient</option>
          </select>
        </label>
        <label>
          Contact Number:
          <input type="text" name="contactNumber" value={user.contactNumber} onChange={handleChange} required />
        </label>
        <label>
          Status:
          <select name="status" value={user.status} onChange={handleChange} required>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
