import React from 'react';

const Anchor = ({ ariaLabel, children, link }) => {
    return (
        <a aria-label={ariaLabel} target="_blank" rel="noopener noreferrer" href={link}>
            {children}
        </a>
    );
};

export default Anchor;
