// Platform.js

import React, { useEffect } from 'react';
import '../Css/Platform.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LineDot from './LineDot';

gsap.registerPlugin(ScrollTrigger);

const Platform = () => {
  useEffect(() => {
    const handlePlatformLoader = () => {
      // GSAP animations for the platform section
      gsap.from('.platform-section', { opacity: 0, x: -50, duration: 1, delay: 0.5, scrollTrigger: { trigger: '.platform-title', start: 'top 80%' }});
      gsap.from('.platform-title', { opacity: 0, x: -50, duration: 1, delay: 0.5, scrollTrigger: { trigger: '.platform-title', start: 'top 80%' } });
      
    };

    // Add event listener for the load event
    window.addEventListener('load', handlePlatformLoader);

    // Cleanup function to remove the event listener
    return () => {
      // Remove event listener when the component unmounts
      window.removeEventListener('load', handlePlatformLoader);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='platform-section'>
      <h1 className="platform-title">Works on your fav platforms.</h1>
      {/* <img className="platformimg" src="/match.png" alt="Example Image" /> */}
      <LineDot />
    </div>
  );
};

export default Platform;
