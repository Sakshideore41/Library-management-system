// src/Footer.js
import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>LEARN MORE</h3>
        <ul>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="/security">Security</a></li>
          <li><a href="/terms">Terms</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>SOCIAL MEDIA</h3>
        <ul>
          <li><a href="https://www.instagram.com">Instagram</a></li>
          <li><a href="https://www.twitter.com">Twitter</a></li>
          <li><a href="https://www.linkedin.com">LinkedIn</a></li>
          <li><a href="https://www.facebook.com">Facebook</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>ABOUT LIBRARY</h3>
        <ul>
          <li><a href="/who-we-are">Who We Are</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/work-with-us">Work With Us</a></li>
          <li><a href="/investor-relations">Investor Relations</a></li>
          <li><a href="/report-fraud">Report Fraud</a></li>
          <li><a href="/press-kit">Press Kit</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
