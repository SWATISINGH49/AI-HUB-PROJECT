// Footer.js
import React from 'react';
import '../Css/Footer.css'; // Import your CSS file for Footer styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-row" id="news-section">
        <div className="footer-left">
          <h3>AIHub is built for everyone.</h3>
          <p>Join us today and experience the power of AI-powered text creation for yourself!</p>
          <button>Get 100 words for free</button>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h3>MARKETERS</h3>
            <h3>STUDENTS</h3>
            <h3>WRITERS</h3>
            <h3>DEVELOPERS</h3>
            <h3>ENTREPRENEURS</h3>
          </div>
        </div>
      </div>
      <div className="footer-row" id="newsletter-section">
        <div className="footer-left">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with our latest news and updates!</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h3>COMPANY</h3>
            <a href="#">Account</a>
            <a href="#">Careers</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-column">
            <h3>PRESS</h3>
            <a href="#">Media</a>
            <a href="#">Blog</a>
            <a href="#">Help Center</a>
          </div>
        </div>
      </div>
      <br /> {/* Add <br> for some space */}
      <div className="footer-row" id="disclaimer-section">
        <p className="disclaimer">
          2024 HIGH AYUSH. All images are for demo purposes only.
          These Terms will be applied fully and affect your use of this Website.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
