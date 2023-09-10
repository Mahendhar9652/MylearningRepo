import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="footer-section-title">About Us</h3>
            <p>"Online shopping is not just a trend, it's a lifestyle for millions of Indians who seek convenience, variety, and affordability at their fingertips." - Shopify</p>
          </div>
          <div className="footer-section contact">
            <h3 className="footer-section-title">Contact Us</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i>Telangana india </li>
              <li><i className="fas fa-phone"></i>(123) 456-7890</li>
              <li><i className="fas fa-envelope"></i>info@shopify.com</li>
            </ul>
          </div>
          <div className="footer-section social">
            <h3 className="footer-section-title">Follow Us</h3>
            <ul>
              <li><i className="fab fa-facebook"></i></li>
              <li><i className="fab fa-twitter"></i></li>
              <li><i className="fab fa-instagram"></i></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Shopify &copy; 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
