import React, { useState } from 'react';

const HoverEffect = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    position: 'relative',
    cursor: 'pointer',
    transition: 'transform 0.3s ease', // Add a smooth transition effect
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
    padding: '10px', // Adjust padding as needed
  };

  return (
    <div
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </div>
  );
};

export default HoverEffect;
