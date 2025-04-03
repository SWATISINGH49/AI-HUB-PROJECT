import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Css/TwoColumnLayout.css';
import Accordion from '../Components/Accordion';

gsap.registerPlugin(ScrollTrigger);

const TwoColumnLayout = () => {
  useEffect(() => {
    const handleTwoLoad = () => {
      // Animate the columns with stagger effect
      gsap.from('.ecolumn', { opacity: 0, y: 50, stagger: 0.2, duration: 1, scrollTrigger: { trigger: '.ecolumn', start: 'top 80%' } });
      // Animate the first column's heading
      gsap.from('.ecolumn h2', { opacity: 0, y: 20, duration: 0.8, delay: 0.5, scrollTrigger: { trigger: '.ecolumn', start: 'top 80%' } });
      // Animate the second column's image
      gsap.from('.ecolumn img', { opacity: 0, scale: 0.8, duration: 0.8, delay: 1, scrollTrigger: { trigger: '.ecolumn', start: 'top 80%' } });

      // Color animation for the .container background
      const colors = ['#fff5a9', '#f8f8e7']; // Add your desired colors
      gsap.to('.container', {
        backgroundColor: () => colors[Math.floor(Math.random() * colors.length)],
        duration: 3, // Duration of color change
        repeat: -1, // Repeat indefinitely
        yoyo: true, // Reverse the animation to create a smooth transition
        ease: 'power1.inOut', // Adjust the easing function as needed
      });
    };

    window.addEventListener('load', handleTwoLoad);

    return () => {
      window.removeEventListener('load', handleTwoLoad);
    };
  }, []);

  return (
    <div className="container">
      <div className="ecolumn">
        {/* Content for the first column */}
        <img src="/snip.png" alt="Example Image" className="snipimg" />
        <h2 style={{ fontSize: '250%' }}>The future of copy.</h2>
        
          <Accordion />
        
        <p>This is the content of the first column.</p>
      </div>

      <div className="ecolumn">
        {/* Content for the second column */}
        <img src="/img.webp" alt="Example Image" style={{ width: '80%', padding:'100px' }} />
        {/* <h2>Column 2</h2> */}
        {/* <p>This is the content of the second column.</p> */}
      </div>
    </div>
  );
};

export default TwoColumnLayout;
