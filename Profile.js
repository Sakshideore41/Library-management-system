import React from 'react';
import './styles.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="profile-info">
          <img src="/Profilelogo.jpg" alt="Profile" />
          <h3>Sakshi Deore</h3>
          <p>Online</p>
        </div>
        <nav>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/profile">My Profile</a></li>
            <li><a href="/change-password">Change Password</a></li>
            <li><a href="/update-details">Update Details</a></li>
            <li><a href="/manage-books">Manage Books</a></li>
            <li><a href="/manage-fines">Manage Fines</a></li>
            <li><a href="/issue-books">Issue Books</a></li>
            <li><a href="/view-issued-books">View All Issued Books</a></li>
            <li><a href="/view-archive-books">View All Archive Books</a></li>
            <li><a href="/manage-students">Manage Students</a></li>
            <li><a href="/view-request-books">View Request Books</a></li>
            <li><a href="/institution-setup">Institution Setup</a></li>
            <li><a href="/about-software">About Software</a></li>
          </ul>
        </nav>
      </div>
      <div className="profile-content">
        <h2>Dashboard <span>Control panel</span></h2>
        <div className="profile-form">
          <form>
            <label>
              First Name:
              <input type="text" name="firstName" required />
            </label>
            <label>
              Last Name:
              <input type="text" name="lastName" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value="deoresakshi7@gmail.com" required />
            </label>
            <label>
              Phone:
              <input type="text" name="phone" value="9850647909" required />
            </label>
            <label>
              Address:
              <input type="text" name="address" value="Hinjawadi" required />
            </label>
            <label>
              City:
              <input type="text" name="city" value="Pune" required />
            </label>
            <label>
              State:
              <input type="text" name="state" value="Maharashtra" required />
            </label>
            <label>
              Zip:
              <input type="text" name="zip" value="411000" required />
            </label>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
