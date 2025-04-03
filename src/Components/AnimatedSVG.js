import React from 'react';

const AnimatedSVG = () => {
  return (
    <svg
      className="lqd-integration-item-connector -order-1 overflow-visible lqd-transform transition-colors flip-y"
      width="127"
      height="82"
      viewBox="0 0 127 82"
      fill="none"
      stroke="currentColor"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="circle-border-bc1d7b5">
          <path
            d="M2 2.02059C9.629 2.22859 25.2108 1.92059 39.9248 2.02059C41.8538 2.03359 43.8821 2.13661 46.2041 2.36861C47.3261 2.47961 48.75 2.66862 50.123 2.91762C59.423 4.57462 64.518 12.4566 64.583 18.8176V60.0896C64.583 60.0896 62.4827 80.0736 80.0127 80.5036C79.9057 80.5036 124.599 80.5036 124.759 80.5036"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            vector-effect="non-scaling-stroke"
            stroke="white"
          ></path>
          <circle r="8" fill="black">
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              fill="freeze"
              path="M2 2.02059C9.629 2.22859 25.2108 1.92059 39.9248 2.02059C41.8538 2.03359 43.8821 2.13661 46.2041 2.36861C47.3261 2.47961 48.75 2.66862 50.123 2.91762C59.423 4.57462 64.518 12.4566 64.583 18.8176V60.0896C64.583 60.0896 62.4827 80.0736 80.0127 80.5036C79.9057 80.5036 124.599 80.5036 124.759 80.5036"
            ></animateMotion>
          </circle>
        </mask>
      </defs>
      <path
        d="M2 2.02059C9.629 2.22859 25.2108 1.92059 39.9248 2.02059C41.8538 2.03359 43.8821 2.13661 46.2041 2.36861C47.3261 2.47961 48.75 2.66862 50.123 2.91762C59.423 4.57462 64.518 12.4566 64.583 18.8176V60.0896C64.583 60.0896 62.4827 80.0736 80.0127 80.5036C79.9057 80.5036 124.599 80.5036 124.759 80.5036"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        vector-effect="non-scaling-stroke"
        mask="url(#circle-border-bc1d7b5)"
      ></path>
      <circle
        className="lqd-integration-item-connector-circle"
        r="3"
        fill="currentColor"
        stroke-width="0"
      >
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          fill="freeze"
          path="M2 2.02059C9.629 2.22859 25.2108 1.92059 39.9248 2.02059C41.8538 2.03359 43.8821 2.13661 46.2041 2.36861C47.3261 2.47961 48.75 2.66862 50.123 2.91762C59.423 4.57462 64.518 12.4566 64.583 18.8176V60.0896C64.583 60.0896 62.4827 80.0736 80.0127 80.5036C79.9057 80.5036 124.599 80.5036 124.759 80.5036"
        ></animateMotion>
      </circle>
    </svg>
  );
};

export default AnimatedSVG;
