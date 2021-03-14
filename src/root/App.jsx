import React, { useEffect, useState } from 'react';
import { Header } from '../components/organisms';
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

        if (cards.hasDuplicates()) {
            if (score > highScore) {
                setHighScore(score);
            }
            setScore(0);
        } else {
            setScore((prevScore) => prevScore + 1);
        }
    }, [cards]);

    const addCardToRecord = ({ target }) => {
        setCards([...cards, target.id]);
    };

    return (
        <>
            <GlobalStyles />
            <Header userScore={score} />
            <main>
                <p>test</p>
            </main>
        </>
    );
};

export default App;
