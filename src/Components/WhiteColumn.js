// WhiteColumn.js

import React, { useEffect } from 'react';
import { FaCoffee, FaCode, FaCamera, FaStar, FaApple, FaPlane, FaMusic, FaHeart, FaBook, FaGamepad, FaFilm, FaSmile } from 'react-icons/fa'; // Import icons from react-icons
import '../Css/WhiteColumn.css'; // Import your CSS file
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import the ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin with gsap

const iconData = [
  { whitecolumnicon: <FaCoffee  />, title: 'Email', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { whitecolumnicon: <FaCode  />, title: 'Summarize', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { whitecolumnicon: <FaCamera  />, title: 'Ecommerce', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { whitecolumnicon: <FaStar  />, title: 'SEO', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { whitecolumnicon: <FaApple  />, title: 'FAQ', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { whitecolumnicon: <FaPlane  />, title: 'Testimonials', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { whitecolumnicon: <FaMusic  />, title: 'Script', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { whitecolumnicon: <FaHeart  />, title: 'Code', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { whitecolumnicon: <FaBook  />, title: 'Blogpost', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { whitecolumnicon: <FaGamepad  />, title: 'Social Media', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availablet' },
  { whitecolumnicon: <FaFilm  />, title: 'Advertisement', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availablet' },
  { whitecolumnicon: <FaSmile  />, title: 'Newsletter', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availablet' },
];
const WhiteColumn = () => {
  useEffect(() => {
    const handleWhiteColumnLoad = () => {
      // GSAP animations for the stagger
      gsap.from('.whitecolumn', {
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: '.whitecolumns-container',
          start: 'top 50%', // Adjust the start position as needed
        },
      });
    };

    iconData.forEach((item, index) => {
      const column = document.getElementById(`column-${index}`);

      // Event listeners for hover and mouse leave with stagger effect
      column.addEventListener('mouseenter', () => {
        gsap.to(column, { scale: 1.1, ease: 'power3.out', duration: 0.3 });
      });

      column.addEventListener('mouseleave', () => {
        gsap.to(column, { scale: 1, ease: 'power3.out', duration: 0.3 });
      });
    });

    // Adding event listener for load
    window.addEventListener('load', handleWhiteColumnLoad);

    return () => {
      // Remove event listeners when the component unmounts
      iconData.forEach((item, index) => {
        const column = document.getElementById(`column-${index}`);
        column.removeEventListener('mouseenter', () => {});
        column.removeEventListener('mouseleave', () => {});
      });

      // Remove load event listener when the component unmounts
      window.removeEventListener('load', handleWhiteColumnLoad);
    };
  }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <div className="whitecolumns-container">
      {iconData.map((whiteitem, index) => (
        <div className="whitecolumn" key={index}>
          <div className="whitecolumnicon-container"> {/* New container for circular border */}
            {whiteitem.whitecolumnicon}
          </div>
          <h3>{whiteitem.title}</h3>
          <p>{whiteitem.content}</p>
        </div>
      ))}
    </div>
  );
};

export default WhiteColumn;
