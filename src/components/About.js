import React from 'react';

const About = ({ text }) => {
    return (
        <div style={style}>
            <div className='About'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    );
};

const style = {
    marginTop : '80px',
    marginRight : '100px',
    padding : '10px',
    // border: '1px solid white',
    fontFamily: 'Arial, sans-serif',
    fontSize: '0.8em',
    textAlign: 'justify',
    color: '#aaaaaa',
};
  
export default About;