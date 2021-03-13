import React from 'react';

const Button = ({ ariaLabel, children, onClick }) => {
    return (
        <button aria-label={ariaLabel} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
