import React, { useEffect } from 'react';
import '../Css/Top.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import the ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin with gsap

const Top = () => {
  useEffect(() => {
    const handleTopLoad = () => {
      gsap.from('.left-part h1', {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: '.left-part h1',
          start: 'top 90%',
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.right-part',
          start: 'top 90%',
        },
      });

      tl.from('.right-part .toptext', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
      tl.from('.right-part .topbtn', { opacity: 0, y: 50, duration: 1, delay: 0.2 });
    };

    // Add event listener for the load event
    window.addEventListener('load', handleTopLoad);

    // Cleanup function to remove the event listener
    return () => {
      // Remove event listener when the component unmounts
      window.removeEventListener('load', handleTopLoad);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="top-container">
      <div className="left-part">
        <h1>Generate top quality texts. Instantly.</h1>
      </div>
      <div className="right-part">
        <h3 className='toptext'>Cost-effective solution to generate copy in seconds and editing in real-time.</h3>
        <button className='topbtn'>
          TRY IT YOURSELF
        </button>
      </div>
    </div>
  );
};

export default Top;
