import React from 'react';
import StretchLabel from './StrechLabel';
import HoverEffect from './HoverEffect';
const Nav = () => {
    const navStyle = {
        fontSize: '0.7em',
        fontFamily: 'Arial, sans-serif',
        marginLeft: '100px',
    };

    return (
        <div style={navStyle}>
            <div className='Nav'>
                <HoverEffect label="Home" />
                <HoverEffect label="Projects" />
                <HoverEffect label="About" />
            </div>
        </div>
    );
};

export default Nav;
