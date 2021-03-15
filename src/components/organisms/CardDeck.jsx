import React from 'react';
import styled from 'styled-components';
import arcana from '../../data/arcana';
import Card from '../molecules/Card';

const Deck = styled.div`
    display: grid;
    gap: 3.2rem;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    margin-bottom: 4.8rem;
    padding: 3.2rem;
    place-items: center;
`;

const shuffleDeck = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const CardDeck = ({ onClick }) => {
    shuffleDeck(arcana);

    return (
        <Deck>
            {arcana.map((props, index) => {
                return <Card key={index} tabIndex={0} onClick={onClick} {...props} />;
            })}
        </Deck>
    );
};

export default CardDeck;
