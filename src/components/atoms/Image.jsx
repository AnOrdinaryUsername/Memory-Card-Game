import React from 'react';

const Image = ({ alt, id, onClick, src }) => {
    return <img onClick={onClick} id={id} src={src} alt={alt}></img>;
};

export default Image;
