// LatestNewsCards.js

import React, { useEffect } from 'react';
import '../Css/LatestNewsCards.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LatestNewsCards = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Save time to AI Skills you need to master',
      content: 'Hustle and Cashflow is a blog that aims to educate millennials on personal',
      date: '2024-02-24',
      image: 'news1.webp',
    },
    {
      id: 2,
      title: 'Best Practices and Common Pitfalls of AI',
      content: 'I think that you should be able to select more than one reason for rating.',
      date: '2024-02-25',
      image: 'news2.webp',
    },
    {
      id: 3,
      title: 'Powerful AI Model switches to quantum PC',
      content: 'Join us for upcoming events to learn more about the latest trends in technology.',
      date: '2024-02-25',
      image: 'news3.webp',
    },
    
  ];

  useEffect(() => {
    const handleNewsLoader = () => {
      // GSAP animations for the news cards container
      gsap.from('.latest-news-cards-container', { opacity: 0, y: -50, duration: 0.5, delay: 0.5, scrollTrigger: { trigger: '.latest-news-cards-container', start: 'top 80%' } });

      // GSAP animations for the news cards on hover
      const newsCards = document.querySelectorAll('.news-card');
      newsCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.05, duration: 0.3 });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.3 });
        });
      });
    };

    // Add event listener for the load event
    window.addEventListener('load', handleNewsLoader);

    // Cleanup function to remove the event listener
    return () => {
      // Remove event listener when the component unmounts
      window.removeEventListener('load', handleNewsLoader);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="latest-news-cards-container">
      <h2>Latest News</h2>
      <div className="newscards-wrapper">
        {newsItems.map((news) => (
          <div className="news-card" key={news.id}>
            <img src={news.image} alt={news.title} />
            <div className="newscard-content">
              <h3>{news.title}</h3>
              <p className="newscontent">{news.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNewsCards;