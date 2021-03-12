import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [score, setScore] = useState(0);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Object.assign(Array.prototype, {
            hasDuplicates() {
                return new Set(this).size !== this.length;
            },
        });

        if (cards.hasDuplicates()) {
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
            <Header userScore={score} />
            <main>
                <CardDeck onClick={addCardToRecord} />
            </main>
        </>
    );
};

export default App;
