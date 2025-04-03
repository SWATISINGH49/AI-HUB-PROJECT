// MovingTextComponent.js

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Css/MovingTextComponent.css';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const MovingTextComponent = () => {
  useEffect(() => {
    // Define the moving animation
    const movingAnimation = () => {
      gsap.to('.moving-text', {
        x: '-100%', // Move each text element from right to left (adjust as needed)
        duration: 3, // Adjust the duration based on your preference
        ease: 'linear', // Linear easing for a smooth marquee effect
        repeat: -1, // Repeat the animation infinitely
        onStart: function () {
          // Set the initial position outside the container (adjust as needed)
          gsap.set(this.target, { x: '10%' });
        },
      });
    };

    // Add event listener for the load event
    window.addEventListener('load', movingAnimation);

    // Cleanup function to remove the event listener
    return () => {
      // Remove event listener when the component unmounts
      window.removeEventListener('load', movingAnimation);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="moving-container">
      {/* Repeat your text elements for the marquee effect */}
      <h1 className="moving-text">Generate Copy</h1>
      <h1 className="moving-text">Text Editor</h1>
      <h1 className="moving-text">Select Templates</h1>
      <h1 className="moving-text">Describe Your Idea</h1>
    </div>
  );
};

export default MovingTextComponent;
