// ScrollButton.js

import React from 'react';
import '../Css/ScrollButton.css';


const ScrollButton = ({ onClick }) => {
  return (
    <button className="scroll-button" onClick={onClick}>
      GET 100 Words for FREE.
    </button>
  );
};

export default ScrollButton;
