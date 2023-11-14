import React, { useState } from 'react';
import '../assets/css/StreachLabel.css';

const StretchLabel = ({ text }) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`stretch-label ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      - {text}
    </div>
  );
};

export default StretchLabel;
