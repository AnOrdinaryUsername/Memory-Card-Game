import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
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

const ModalContainer = styled.div`
    padding: 4.8rem;
    position: relative;
    z-index: 1;
    background: white;
    max-width: 350px;
    width: 100%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 0px;
    padding-bottom: 0px;
`;

const Modal = ({ children, onClick, title }) => {
    return (
        <Overlay>
            <Background></Background>
            <ModalContainer role="dialog">
                <Button ariaLabel="Close instructions modal" onClick={onClick}>
                    <FontAwesomeIcon icon={faTimes} />
                </Button>
                <Title>{title}</Title>
                {children}
            </ModalContainer>
        </Overlay>
    );
};

export default Modal;
