import React from 'react';
import { FaFacebookF, FaInstagram, FaGlobe } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>YuM</h2>
        </div>
        <div className="footer-links">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGlobe />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 YuM. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
