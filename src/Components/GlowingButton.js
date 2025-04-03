// GlowingButton.js

import React from 'react';
import '../Css/GlowingButton.css';

const GlowingButton = ({ children, onClick }) => {
  return (
    <button className="glowing-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default GlowingButton;
