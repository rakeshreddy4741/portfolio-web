import React from 'react';
import StretchLabel from './StrechLabel';
import HoverEffect from './HoverEffect';
const Nav = () => {

    return (
        <div>
            <div className='p-5 text-sm'>
                <HoverEffect label="Home" />
                <HoverEffect label="Projects" />
                <HoverEffect label="About" />
            </div>
        </div>
    );
};

export default Nav;
