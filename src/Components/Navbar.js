// Navbar.js

import React, { useState, useEffect } from 'react';
import '../Css/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLanguagesHover = () => {
    setShowLanguages(true);
  };

  const handleLanguagesLeave = () => {
    setShowLanguages(false);
  };

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="logo.svg" alt="Logo" />
      </div>

      {/* Mobile menu button */}
      <div className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation links for larger screens */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#" className="a">Home</a>
        <a href="#" className="a">About</a>
        <a href="#" className="a">Contact</a>
        <a href="#" className="a">Features</a>
        <a href="#" className="a">
          <button className='join' style={{ backgroundColor: '#cdf683' }}>
            JOIN
          </button>
        </a>
      </div>

      {/* Language and Login for larger screens */}
      <div
        className={`language-login ${menuOpen ? 'open' : ''}`}
        onMouseEnter={handleLanguagesHover}
        onMouseLeave={handleLanguagesLeave}
      >
        <span className="en">EN</span>
        {showLanguages && (
          <div className="dropdown-modal">
            <p>Option 1</p>
            <p>Option 2</p>
            <p>Option 3</p>
          </div>
        )}
        <a href="#" className="alogin">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
