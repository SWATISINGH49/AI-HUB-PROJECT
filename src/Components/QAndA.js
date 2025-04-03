// QAndA.js

import React, { useEffect ,useState } from 'react';
import '../Css/QAndA.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const QAndA = () => {
  const [questions, setQuestions] = useState([
    { id: 1, question: 'How does it generate responses?', answer: 'Access valuable insights into customer behavior, identify areas for improvement, manage support requests and make data-driven decisions to optimize your services.' },
    { id: 2, question: 'Is AI copywriting more cost-effective than hiring human writers?', answer: 'Access valuable insights into customer behavior, identify areas for improvement, manage support requests and make data-driven decisions to optimize your services.' },
    { id: 3, question: 'Can AI really write as well as a human?', answer: 'Access valuable insights into customer behavior, identify areas for improvement, manage support requests and make data-driven decisions to optimize your services.' },
    { id: 4, question: 'How do you Handle mt data?', answer: 'Access valuable insights into customer behavior, identify areas for improvement, manage support requests and make data-driven decisions to optimize your services.' },
    { id: 5, question: 'Customize brand by audience and the products ?', answer: 'Access valuable insights into customer behavior, identify areas for improvement, manage support requests and make data-driven decisions to optimize your services.' },
    { id: 6, question: 'What kind of Support is Available?', answer: 'Access valuable insights into customer behavior, identify areas for improvement, manage support requests and make data-driven decisions to optimize your services.' },

    // Add more questions as needed
  ]);

  useEffect(() => {
    const handleQALoader = () => {
      // GSAP animations for the platform section
      gsap.from('.q-and-a-container', { opacity: 0, x: -50, duration: 0.5, delay: 0.5, scrollTrigger: { trigger: '.q-and-a-container', start: 'top 80%' }});
      
    };

    // Add event listener for the load event
    window.addEventListener('load', handleQALoader);

    // Cleanup function to remove the event listener
    return () => {
      // Remove event listener when the component unmounts
      window.removeEventListener('load', handleQALoader);
    };
  }, []); // Empty dependency array to run the effect only once

  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleAnswer = (id) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  return (
    <div className="q-and-a-container">
      <h1>Q&A</h1>
      {questions.map((q) => (
        <div className="question" key={q.id}>
        <div className="question-header" onClick={() => toggleAnswer(q.id)}>
        <h3>{q.question}</h3>
        <span style={{ fontSize: '2em', fontWeight: 'bold' }}>
          {expandedQuestion === q.id ? '-' : '+'}
        </span>
      </div>
          {expandedQuestion === q.id && <p className="answer">{q.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default QAndA;
