import React from 'react';
import '../Css/Bslide.css'; // Import the CSS file
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Bslide = () => {
  const carouselData = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'John Doe',
      designation: 'Web Developer',
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Jane Doe',
      designation: 'UX Designer',
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Alice Smith',
      designation: 'Marketing Specialist',
    },
    {
      id: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Bob Johnson',
      designation: 'Software Engineer',
    },
    {
      id: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Eva Davis',
      designation: 'Product Manager',
    },
    // Add more objects for additional slides
  ];

  // Slick Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust as needed
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="real-stories">
      <h2>Real Stories</h2>
      {/* Use the Slider component */}
      <Slider {...settings}>
        {/* Map through carouselData and create a slide for each item */}
        {carouselData.map((slide) => (
          <div key={slide.id}>
            <h3>{slide.text}</h3>
            <h3>{slide.name}</h3>
            <h3>{slide.designation}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Bslide;
