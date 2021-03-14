import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Button, Title } from '../atoms';

const Overlay = styled.div`
    background: transparent;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
`;

const Background = styled.div`
    position: absolute;
    inset: 0px;
    z-index: 0;
    background: hsla(210deg, 15%, 6.25%, 0.5);
    backdrop-filter: blur(15px);
`;

const modalEnter = keyframes`
    from {
        opacity: 0;
        transform: translateY(2rem);
    }
`;

const ModalContainer = styled.div`
    padding: 4.8rem;
    position: relative;
    z-index: 1;
    background: white;
    border-radius: 0.8rem;
    max-width: 60rem;
    width: 100%;
    margin: 5rem auto;
    animation: ${modalEnter} 0.3s cubic-bezier(0.07, 0.7, 0.69, 1.01) calc(1 * 0.05s) 1 backwards;

    & .exit-button {
        position: absolute;
        top: 0;
        left: 91%;
        border-radius: inherit;
        padding: 0.8rem 1.6rem;
        font-size: 2.4rem;
    }

    & * {
        color: black;
    }
`;

const Modal = ({ children, onClick, title }) => {
    return (
        <Overlay>
            <Background onClick={onClick}></Background>
            <ModalContainer role="dialog">
                <Button
                    ariaLabel="Close instructions modal"
                    className="exit-button"
                    onClick={onClick}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </Button>
                <Title>{title}</Title>
                {children}
            </ModalContainer>
        </Overlay>
    );
};

export default Modal;
