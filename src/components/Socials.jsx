import React from 'react';
import github from '../assets/socialsIcons/github.png';
import linkedin from '../assets/socialsIcons/linkedin.png';
import twitter from '../assets/socialsIcons/twitter.png';
import instagram from '../assets/socialsIcons/instagram.png';
const Socials = () => {

    return (
        <div className='mt-20'>
            {/* <p className='text-white'>Follow me on</p> */}
            <div className='box-border gap-5 justify-start flex'>
                <img src={github} alt="GitHub" className='w-8'/>
                <img src={linkedin} alt="LinkedIn" className='w-8'/>
                <img src={twitter} alt="Twitter" className='w-8'/>
                <img src={instagram} alt="Instagram" className='w-8'/>
            </div>
        </div>
    );
};

export default Socials;
