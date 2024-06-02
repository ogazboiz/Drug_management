// src/components/userManagement/UserList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/UserManagement.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the users from an API or database
    // Replace with actual data fetching logic
    const fetchedUsers = [
      { id: 1, name: 'John Doe', role: 'Pharmacy Manager', email: 'john@example.com', status: 'Active' },
      { id: 2, name: 'Jane Smith', role: 'Admin', email: 'jane@example.com', status: 'Inactive' },
      // Add more users here
    ];
    setUsers(fetchedUsers);
  }, []);

  const handleDelete = (id) => {
    // Add delete functionality here
    console.log(`Delete user with id: ${id}`);
  };

  return (
    <div className="user-list">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <td>
                <Link to={`/admin/users/edit/${user.id}`}>Edit</Link>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
