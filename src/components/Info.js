import React from 'react';

const Info = ({ text }) => {
    return (
        <div style={style}>
            <div>
                <h1 id='Name' style={Name}>Rakesh Vavilala</h1>
                <h4 id='Title' style={Title}>Backend Developer</h4>
                <p id='title-description' style={titleDescription}>Build accessible, inclusive products and digital experiences for the web.</p>
            </div>
        </div>
    );
};

const style = {
    // border : '1px solid rgb(106, 198, 187)',
    marginTop : '60px',
    marginLeft : '100px',
    marginRight : '50px',
    padding : '10px',
    fontFamily: 'Arial, sans-serif',
};

const Name = {
    fontSize: '1.6em',
}

const Title = {
    marginTop: '-15px',
    fontSize: '0.6em',
}

const titleDescription = {
    // marginTop: '-10px',
    fontSize: '0.8em',
}

export default Info;
