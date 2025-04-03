import React, { useEffect } from 'react';
import '../Css/Header.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    const handleHeaderLoader = () => {
      // GSAP animations for the header section
      gsap.from('.header-section', { opacity: 0, duration: 1, delay: 0.5 });

      // Animation for lines and dots
      const lines = document.querySelectorAll('.line');
      const dots = document.querySelectorAll('.dot');

      // Animation for lines
      gsap.from(lines, {
        x: '-=100%', // Start from the left (-100%)
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: '.header-section',
          start: 'top center', // Adjust as needed
        },
      });

      // Animation for dots
      gsap.from(dots, {
        scale: 0,
        stagger: 0.2,
        duration: 0.5,
        scrollTrigger: {
          trigger: '.header-section',
          start: 'top center', // Adjust as needed
        },
      });

      // Color-changing animation for .header-section
      gsap.to('.header-section', {
        backgroundColor: '#f7f2dd', // Set your desired color
        duration: 5, // Duration of the color change
        repeat: -1, // Repeat indefinitely
        yoyo: true, // Reverse the animation to create a smooth transition
        ease: 'power1.inOut', // Adjust the easing function as needed
      });
    };

    // Add event listener for the load event
    window.addEventListener('load', handleHeaderLoader);

    // Cleanup function to remove the event listener
    return () => {
      // Remove event listener when the component unmounts
      window.removeEventListener('load', handleHeaderLoader);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='header-section'>
     
     <img src="/topani1.svg" alt="Example Image" className="topani1" />

      {/* Image in the middle */}
      <img src="/dash.png" alt="Example Image" className="centered-image" />

      <img src="/topani2.svg" alt="Example Image" className="topani2" />

    </div>
  );
};

export default Header;
