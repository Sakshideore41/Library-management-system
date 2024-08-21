// src/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Headerfooter.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Library Management System</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/library">Library</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
        <Link to="/Issuebook">Issue Book</Link>
        <Link to="/Enquiry">Enquiry</Link>
        <Link to="/BookList">BookList</Link>
        <Link to="/CustomerReviews">Reviews</Link>{/* New link to Reviews */}
       
      </nav>
    </header>
  );
};

export default Header;
