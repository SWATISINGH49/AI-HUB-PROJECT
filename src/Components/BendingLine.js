import React from 'react';

const BendingLine = () => {
  // Array of line heights
  const lineHeights = [50, 80, 120, 40, 200, 60, 150, 90, 30, 180];

  return (
    <div className="bendinglines-container"  style={{ width:'100%' }}>
      {lineHeights.map((height, index) => (
        <div key={index} className="line" style={{ height: `${height}px` }}></div>
      ))}
    </div>
  );
};

export default BendingLine;
