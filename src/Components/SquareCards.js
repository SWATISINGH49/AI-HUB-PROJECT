// SquareCards.js

import React from 'react';
import '../Css/SquareCards.css';

const SquareCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img src="logo1.png" alt="Logo 1" />
        <h3>Card 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="card">
        <img src="logo2.png" alt="Logo 2" />
        <h3>Card 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="card">
        <img src="logo3.png" alt="Logo 3" />
        <h3>Card 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      {/* Add more cards as needed */}
    </div>
  );
};

export default SquareCards;

