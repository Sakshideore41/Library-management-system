// src/Dashboard.js
import React from 'react';
import './styles.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Admin Dashboard</h2>
      <div className="dashboard-sections">
        <div className="section">
          <h3>Registered Users</h3>
          {/* Add user details here */}
        </div>
        <div className="section">
          <h3>Available Books</h3>
          {/* Add available books details here */}
        </div>
        <div className="section">
          <h3>Book Categories</h3>
          {/* Add book categories details here */}
        </div>
        <div className="section">
          <h3>Authors</h3>
          {/* Add authors details here */}
        </div>
        <div className="section">
          <h3>Issued Books</h3>
          {/* Add issued books details here */}
        </div>
      </div>
      <div className="managerial-features">
        <h2>Managerial Features</h2>
        <button>Add/Manage Books</button>
        <button>Add/Manage Categories</button>
        <button>Add/Manage Authors</button>
        <button>Issue Book</button>
      </div>
    </div>
  );
};

export default Dashboard;

