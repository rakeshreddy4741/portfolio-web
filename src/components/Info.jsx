import React from 'react';

const Info = ({ text }) => {
    return (
        <div className='p-5 transition duration-100'>
            <div>
                <h1 id='Name' className='font-bold font-arial text-4xl mb-0 hover:text-cyan-400'>Rakesh Vavilala</h1>
                <h4 id='Title' className='font-sans text-sm mb-2 ml-[0.1em]'>Backend Developer</h4>
                <p id='title-description' className='font-sans text-sm ml-[0.1em] text-gray-400'>Build accessible, inclusive products and digital experiences for the web.</p>
            </div>
        </div>
    );
};

export default Info;
