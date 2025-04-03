// LineDot.js

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Css/LineDot.css'; // Import your CSS file

gsap.registerPlugin(ScrollTrigger);

const LineDot = () => {
  useEffect(() => {
    const handleLineDotLoad = () => {
      gsap.from('.dotimg', { opacity: 1, duration: 1, delay: 0.5 });
      gsap.to('.dotleft', { x: '-2000%', duration: 2, ease: 'linear', repeat: -1 });
      gsap.to('.dotright', { x: '2000%', duration: 2, ease: 'linear', repeat: -1 });
    };

    window.addEventListener('load', handleLineDotLoad);

    return () => {
      window.removeEventListener('load', handleLineDotLoad);
    };
  }, []);

  return (
    <div className="line-dot-container">
      {/* Left Side Lines */}
      <div className="leftline-column">
        <div className="left-line-1">
          <img className="leftimg1" src="svgexport-48.svg" alt="Dot Image" />
        </div>

        <div className="left-line-2">
          <img className="leftimg2" src="svgexport-46.svg" alt="Dot Image" />
        </div>

        <div className="left-line-3">
          <img className="leftimg3" src="svgexport-48.svg" alt="Dot Image" />
        </div>
      </div>

      {/* Dot Image */}
      <img className="dotimg" src="connect.png" alt="Dot Image" />

      {/* Right Side Lines */}
      <div className="rightline-column">
        <div className="right-line-1">
          <img className="rightimg1" src="svgexport-48.svg" alt="Dot Image" />
        </div>

        <div className="right-line-2">
          <img className="rightimg2" src="svgexport-46.svg" alt="Dot Image" />
        </div>

        <div className="right-line-3">
          <img className="rightimg3" src="svgexport-48.svg" alt="Dot Image" />
        </div>
      </div>

    </div>
  );
};

export default LineDot;
