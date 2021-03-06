import React from 'react';
import styled from 'styled-components';

const GroupContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: baseline;
    justify-content: center;
    font-size: 2.4rem;
    column-gap: 1.2rem;

    & a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        line-height: normal;
    }

    & > * {
        padding: 0 1rem;
    }
`;

const ButtonGroup = ({ children }) => {
    return <GroupContainer>{children}</GroupContainer>;
};

export default ButtonGroup;
