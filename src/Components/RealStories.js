// RealStories.js
import React from 'react';
import Slider from 'react-slick';
import '../Css/RealStories.css';

const RealStories = () => {
  const stories = [
    {
      id: 1,
      title: 'High Ayush',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      imageUrl: '6.jpg',
    },
    {
      id: 2,
      title: 'Juice WRLD',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      imageUrl: '6.jpg',
    },
    {
      id: 3,
      title: '999',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      imageUrl: '.jpg',
    },
    // Add more stories as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="ries-container">
      <h2>Real Stories</h2>
      <Slider {...settings} className="carousel">
        {stories.map((story) => (
          <div className="story-card" key={story.id}>
            <img src={story.imageUrl} alt={story.title} />
            <div className="card-content">
              <h3>{story.title}</h3>
              <p>{story.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RealStories;
