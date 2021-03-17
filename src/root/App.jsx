import React, { useEffect, useState } from 'react';
import { ScoreBoard, WinScreen } from '../components/molecules';
import { CardDeck, Header } from '../components/organisms';
import { totalCardCount } from '../data/arcana';
import GlobalStyles from './GlobalStyles';

const App = () => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [cards, setCards] = useState([]);

    Object.assign(Array.prototype, {
        hasDuplicates() {
            return new Set(this).size !== this.length;
        },
    });

    useEffect(() => {
        if (cards.hasDuplicates()) {
            setCards([]);
            setScore(0);
        } else {
            setScore(cards.length);
        }
    }, [cards]);

    useEffect(() => {
        if (cards.hasDuplicates() && score > highScore) {
            setHighScore(score);
        }
    }, [cards, score, highScore]);

    const addCardToRecord = ({ target }) => {
        setCards([...cards, target.id]);
    };

    const playAgain = () => {
        setScore(0);
        setCards([]);
    };

    return (
        <>
            <GlobalStyles />
            <Header />
            <main>
                {score !== totalCardCount && (
                    <>
                        <ScoreBoard score={score} highScore={highScore} />
                        <CardDeck onClick={addCardToRecord} />
                    </>
                )}
                {score === totalCardCount && <WinScreen onClick={playAgain} />}
            </main>
        </>
    );
};

export default App;
