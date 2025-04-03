// RoundButton.js

import React from 'react';
import '../Css/RoundButton.css';
import { FaCoffee } from 'react-icons/fa';

const RoundButton = ({ onClick, altText }) => {
  return (
    <button className="round-button" onClick={onClick}>
      <FaCoffee className="button-logo" />
    </button>
  );
};

export default RoundButton;
