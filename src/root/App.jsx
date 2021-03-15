import React, { useEffect, useState } from 'react';
import { ScoreBoard } from '../components/molecules';
import { CardDeck, Header } from '../components/organisms';
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

    return (
        <>
            <GlobalStyles />
            <Header />
            <main>
                <ScoreBoard score={score} highScore={highScore} />
                <CardDeck onClick={addCardToRecord} />
            </main>
        </>
    );
};

export default App;
