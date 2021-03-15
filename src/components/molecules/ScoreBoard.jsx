import React from 'react';
import styled from 'styled-components';

const ScoreContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    padding: 1.6rem;

    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) {
        left: initial;
        font-size: 2rem;
        display: grid;
        grid-template-rows: 1fr 1fr;
        row-gap: 1.2rem;
        border-radius: 0.8rem;
        margin-bottom: 2.4rem;
        margin-right: 2.4rem;
        min-width: 20rem;
        padding: 2rem;
    }

    /* Large devices (desktops, 992px and up */
    @media (min-width: 992px) {
        font-size: 2.4rem;
        min-width: 30rem;
        padding: 2.4rem;
        min-width: 30rem;
    }

    &.color {
        background-color: hsl(257, 60%, 88%);
        color: hsl(0, 0%, 25%);
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 1em;
    flex: 1;

    @media (min-width: 456px) {
        justify-content: space-between;
    }
`;

const ScoreBoard = ({ score, highScore }) => {
    return (
        <ScoreContainer className="color">
            <Wrapper>
                <strong>Score</strong>
                <span>{score}</span>
            </Wrapper>
            <Wrapper>
                <strong>High Score</strong>
                <span>{highScore}</span>
            </Wrapper>
        </ScoreContainer>
    );
};

export default ScoreBoard;
