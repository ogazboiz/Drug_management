// src/components/userManagement/EditUser.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../css/UserManagement.css';

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ name: '', email: '', role: '', contactNumber: '', status: 'Active' });

  useEffect(() => {
    // Fetch user data based on id from an API or database
    // Replace with actual data fetching logic
    const fetchedUser = { name: 'John Doe', email: 'john@example.com', role: 'Pharmacy Manager', contactNumber: '123456789', status: 'Active' };
    setUser(fetchedUser);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user in the database
    console.log('User updated:', user);
  };

  return (
    <div className="edit-user">
      <h2>Edit User</h2>
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
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;
