import React, { useEffect } from 'react';
import { FaCoffee, FaCode, FaCamera, FaStar, FaApple, FaPlane, FaMusic, FaHeart, FaBook, FaGamepad, FaFilm, FaSmile } from 'react-icons/fa';
import gsap from 'gsap';
import '../Css/ColumnsWithIcons.css';

const iconData = [
  { icon: <FaCoffee />, title: 'Email', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { icon: <FaCode />, title: 'Summarize', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { icon: <FaCamera />, title: 'Ecommerce', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { icon: <FaStar />, title: 'SEO', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { icon: <FaApple />, title: 'FAQ', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { icon: <FaPlane />, title: 'Testimonials', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { icon: <FaMusic />, title: 'Script', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { icon: <FaHeart />, title: 'Code', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { icon: <FaBook />, title: 'Blogpost', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum available' },
  { icon: <FaGamepad />, title: 'Social Media', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availablet' },
  { icon: <FaFilm />, title: 'Advertisement', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availablet' },
  { icon: <FaSmile />, title: 'Newsletter', content: 'There are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availableThere are many variations of passages of Lorem Ipsum availablet' },
];

const ColumnsWithIcons = () => {
  useEffect(() => {
    const handleColumnLoad = () => {
      // GSAP animations for the stagger
      gsap.from('.column', {
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: '.columns-container',
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
    window.addEventListener('load', handleColumnLoad);

    return () => {
      // Remove event listeners when the component unmounts
      iconData.forEach((item, index) => {
        const column = document.getElementById(`column-${index}`);
        column.removeEventListener('mouseenter', () => {});
        column.removeEventListener('mouseleave', () => {});
      });

      // Remove load event listener when the component unmounts
      window.removeEventListener('load', handleColumnLoad);
    };
  }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <div className="columns-container">
      {iconData.map((item, index) => (
        <div className="column" key={index} id={`column-${index}`}>
          <div className="icon-container">{item.icon}</div>
          <h3>{item.title}</h3>
          <p style={{ color: 'white' }}>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ColumnsWithIcons;