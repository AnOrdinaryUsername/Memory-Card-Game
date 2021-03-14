import React from 'react';
import styled from 'styled-components';

const MainTitle = styled.h1`
    font-size: 1.5em;
`;

const Title = ({ children }) => {
    return <MainTitle>{children}</MainTitle>;
};

export default Title;
