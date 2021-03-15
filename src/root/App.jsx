import React, { useEffect, useState } from 'react';
import { ScoreBoard, WinScreen } from '../components/molecules';
import { CardDeck, Header } from '../components/organisms';
import { totalCardCount } from '../data/arcana';
import GlobalStyles from './GlobalStyles';

const App = () => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Object.assign(Array.prototype, {
            hasDuplicates() {
                return new Set(this).size !== this.length;
            },
        });

        if (cards.length !== 0) {
            if (cards.hasDuplicates()) {
                if (score > highScore) {
                    setHighScore(score);
                }
                setCards([]);
                setScore(0);
            } else {
                setScore((prevScore) => prevScore + 1);
            }
        }
    }, [cards]); // eslint-disable-line react-hooks/exhaustive-deps

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
