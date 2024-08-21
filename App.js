// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './SignUp';
import Login from './Login';
import Dashboard from './Dashboard';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import IssueBook from './Issuebook';
import Profile from './Profile';
import BookList from './BookList';
import EnquiryForm from './Enquiry';
import CustomerReviews from './CustomerReviews'; // Import CustomerReviews
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/signUp" element={<Signup />} /> {/* Updated path to lowercase */}
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/library" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Issuebook" element={<IssueBook />} /> {/* Updated path to lowercase */}
          <Route path="/booklist" element={<BookList />} /> {/* Updated path to lowercase */}
          <Route path="/enquiry" element={<EnquiryForm />} />
          <Route path="/CustomerReviews" element={<CustomerReviews />} /> {/* Added CustomerReviews route */}
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
