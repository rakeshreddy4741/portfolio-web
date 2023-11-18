import React from 'react';

const About = ({ text }) => {
    return (
        <div>
            <div className='text-sm text-gray-400'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <br></br>
                <p>
                    My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
                    When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
                </p>
            </div>
        </div>
    );
};
  
export default About;