// Steps.js

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Css/Steps.css';

gsap.registerPlugin(ScrollTrigger);

const Steps = () => {
  useEffect(() => {
    const handleStepsLoad = () => {
      gsap.from('.left-column h1', { opacity: 0, x: -50, duration: 0.5, delay: 0.2, scrollTrigger: { trigger: '.left-column h1', start: 'top 50%' } });

      const stepsTimeline = gsap.timeline({
        scrollTrigger: { trigger: '.right-column', start: 'top 80%' },
      });

      // Animate each step
      stepsTimeline.from('.step', { opacity: 0, y: 50, stagger: 0.2, duration: 0.2 });
      stepsTimeline.from('.step .circle', { scale: 0, duration: 0.2, stagger: 0.2 });
      stepsTimeline.from('.step-text', { opacity: 0, x: 50, stagger: 0.2, duration: 0.2 });
    };

    window.addEventListener('load', handleStepsLoad);

    return () => {
      window.removeEventListener('load', handleStepsLoad);
    };
  }, []);

  return (
    <div className="stepcontainer">
      <div className="left-column">
        <h1>How does it even work?</h1>
        <img className="work-image" src="work.png" alt="Work Image Description"></img>
      </div>
      <div className="right-column">
        {/* Right column content */}
        <div className="step">
          <div className="circle">1</div>
          <div className="step-text">
            <h1>Sign up for free.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Nulla eget libero ac ligula aliquam auctor eu non odio. <br />
              Sed et venenatis odio. Vestibulum cursus, elit at blandit dapibus, <br />
              ipsum libero viverra mi, nec consequat urna urna id sem.
             </p>
             
          </div>
        </div>
        <div className="connector"></div>
        <div className="step">
          <div className="circle">2</div>
          <div className="step-text">
            <h1>Select a Template</h1>
            <p>Our tools can help you produce everything from product descriptions.</p>
          </div>
        </div>
        <div className="connector"></div>
        <div className="step">
          <div className="circle">3</div>
          <div className="step-text">
            <h1>Describe your Idea</h1>
            <p>Simply input some basic information about your brand or product.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
