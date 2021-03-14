import React from 'react';

const Button = ({ ariaLabel, children, className, onClick }) => {
    return (
        <button className={className} aria-label={ariaLabel} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
