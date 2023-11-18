import React from 'react';

const Button = ({ onClick, children }) => {
    return (
        <button  style={style} onClick={onClick}>
            {children}
        </button>
    );
};

const style = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
  };
  
export default Button;

