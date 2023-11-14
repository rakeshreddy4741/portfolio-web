import React, { useState } from 'react';

const StretchLabel = ({ label, labelText }) => {
    const [isHovered, setIsHovered] = useState(false);

    const labelContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        userSelect: 'none',
    };

    const labelTextStyle = {
        marginRight: '8px', // Adjust spacing between label and line
        color: '#ffffff', // Color of the label text
    };

    const stretchLineStyle = {
        position: 'absolute',
        bottom: '-3px', // Adjust the bottom position based on your design
        left: 0,
        right: 0,
        height: '2px', // Adjust the height of the stretching line
        backgroundColor: '#ffffff', // Color of the stretching line
        transform: `scaleX(${isHovered ? 1 : 0})`, // Use state to control the transformation
        transformOrigin: 'bottom left',
        transition: 'transform 0.3s ease', // Add a smooth transition effect
    };

    return (
        <div
            style={labelContainerStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span style={labelTextStyle}>{labelText}</span>
            <div style={stretchLineStyle}></div>
            <span>{label}</span>
        </div>
    );
};

export default StretchLabel;
