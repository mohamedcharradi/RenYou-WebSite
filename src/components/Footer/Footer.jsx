// components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo and Brand Name */}
      <div className="logo-section">
        <div className="logo">
          {/* You can replace this with an actual logo image if available */}
          <div className="logo-shape"></div>
        </div>
        <h1 className="brand-name">Renyou</h1>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        <p><strong>Adresse:</strong> Nabeul, Tunisia</p>
        <p>+216 55 373 586</p>
        <p>contact.renyousnp.com</p>
      </div>

      {/* Divider */}
      <div className="divider"></div>

      {/* Contact Us Form */}
      <div className="contact-form-section">
        <h2 className="contact-heading">Contact Us</h2>
        <div className="contact-form">
          <input type="text" placeholder="Mail" className="input-field" />
          <button className="send-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M4 12v-2l8-5v3h4v4h-4v3l-8-5z" />
            </svg>
          </button>
        </div>
        <textarea placeholder="Type your question here" className="question-textarea"></textarea>
      </div>

      {/* Divider */}
      <div className="divider"></div>

      {/* Social Media Icons (as text) */}
      <div className="social-icons">
        <span>In</span>
        <span>f</span>
        <span>@</span>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>© 2025 Sianphilosophy. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;