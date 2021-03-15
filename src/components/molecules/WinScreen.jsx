import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    & h2 {
        font-size: 1.5em;
        font-weight: 500;
        margin: 0 2.4rem;
        padding-bottom: 3.2rem;
        text-align: center;
    }

    @media (min-width: 576px) {
        & h2 {
            font-size: 2em;
        }
    }

    & button {
        border-radius: 0.8rem;
        margin: 3.2rem 2.4rem 0;
        background-color: var(--win-bg-color);
        color: var(--win-font-color);
        font-size: 1em;
        font-weight: 500;
        padding: 1.2rem 2.4rem;
        align-self: stretch;
    }

    @media (min-width: 576px) {
        & button {
            align-self: center;
        }
    }
`;

const WinScreen = ({ onClick }) => {
    const width =
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    const isMobile = width < 576;

    return (
        <Container>
            <h2>🥳 Congratulations, Winner! 🎉</h2>
            <iframe
                title="Congratulation scene from Evangelion"
                width={isMobile ? '280' : '560'}
                height={isMobile ? '157.5' : '315'}
                src="https://www.youtube-nocookie.com/embed/wDajqW561KM"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <button onClick={onClick}>Play Again</button>
        </Container>
    );
};

export default WinScreen;
