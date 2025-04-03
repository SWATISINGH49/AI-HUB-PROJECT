import React from 'react';

const AnimatedLineSVG = () => {
  return (
    <svg
      className="lqd-integration-item-connector -order-1 overflow-visible lqd-transform transition-colors flip-x"
      width="200"
      height="20"
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0"
        y1="10"
        x2="200"
        y2="10"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      

      <circle
        className="lqd-integration-item-connector-circle"
        r="5"
        fill="currentColor"
        stroke-width="0"
      >
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          fill="freeze"
          path="M0 10 L200 10"
        />
      </circle>
    </svg>
  );
};

export default AnimatedLineSVG;
