import React, { useState } from 'react';
import '../Css/Accordion.css';


const Accordion = ({ index, title, content, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  const handleToggle = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={handleToggle}>
        <span style={{ fontWeight: 'bold' }}>{title}</span>
        <button className={isOpen ? 'green-bg' : ''}>{isOpen ? '-' : '+'}</button>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accord = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    { title: 'AI Text Generation', content: 'Select an AI Platform and Input some basic information about your idea, brand, product, or service, and the AI would generate a unique, engaging piece of content in seconds.' },
    { title: 'Text Editor', content: 'Select an AI Platform and Input some basic information about your idea, brand, product, or service, and the AI would generate a unique, engaging piece of content in seconds.' },
    { title: 'Multilingual', content: 'Select an AI Platform and Input some basic information about your idea, brand, product, or service, and the AI would generate a unique, engaging piece of content in seconds.' },
  ];

  return (
    <div>
      {accordionData.map((accordion, index) => (
        <Accordion
          key={index}
          index={index}
          title={accordion.title}
          content={accordion.content}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
  );
};

export default Accord;
