// src/components/dashboards/Overview.jsx
import React from 'react';
import '../../css/Overview.css';

const Overview = () => {
  return (
    <div className="overview">
      <section className="overview-section">
        <h2>Overview</h2>
        <div className="stats-summary">
          <div className="card">Total Drugs: 120</div>
          <div className="card">Drugs Dispensed: 30</div>
          <div className="card">Expiring Soon: 5</div>
          <div className="card">Pending Orders: 10</div>
        </div>
        {/* Add charts and graphs here */}
      </section>
      <div className="stats">
        <div className="stat">
          <h3>Total Users</h3>
          <p>1,234</p>
        </div>
        <div className="stat">
          <h3>Active Users</h3>
          <p>567</p>
        </div>
        <div className="stat">
          <h3>Pending Orders</h3>
          <p>89</p>
        </div>
        <div className="stat">
          <h3>Total Revenue</h3>
          <p>$123,456</p>
        </div>
      </div>
      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <ul>
          <li>User John Doe logged in</li>
          <li>Order #12345 was placed</li>
          <li>Inventory updated for Item #678</li>
          <li>User Jane Smith updated profile</li>
        </ul>
      </div>
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <button>Manage Users</button>
        <button>View Reports</button>
        <button>Update Inventory</button>
        <button>Settings</button>
      </div>
    </div>
  );
};

export default Overview;
