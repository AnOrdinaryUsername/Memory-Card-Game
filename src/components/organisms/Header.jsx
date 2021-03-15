import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { totalCardCount } from '../../data/arcana';
import { Anchor, Button, Title } from '../atoms';
import { ButtonGroup, Modal } from '../molecules';

const root = document.documentElement;

const initialTheme = (() => {
    // Initial color theme.
    let theme = 'light';
    const storedTheme = localStorage.getItem('theme');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (storedTheme) {
        if (storedTheme === 'dark') {
            theme = 'dark';
        }
    } else if (mediaQuery.matches) {
        theme = 'dark';
    }

    if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        return false;
    }

    root.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    return true;
})();

const Header = () => {
    const [theme, setTheme] = useState(initialTheme);
    const [isHidden, setIsHidden] = useState(true);

    const changeTheme = () => {
        setTheme(!theme);
    };

    const changeModalVisibility = () => {
        setIsHidden(!isHidden);
    };

    useEffect(() => {
        const colorTheme = theme ? 'light' : 'dark';
        root.setAttribute('data-theme', colorTheme);
        localStorage.setItem('theme', colorTheme);
    }, [theme]);

    return (
        <header>
            <Title>Memory Card Game</Title>
            <ButtonGroup>
                <Button ariaLabel="Show instructions for game" onClick={changeModalVisibility}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                </Button>
                <Anchor
                    ariaLabel="View the source code repository"
                    link="https://github.com/AnOrdinaryUsername/Memory-Card-Game"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </Anchor>
                <Button
                    ariaLabel={theme ? 'Activate dark theme' : 'Activate light theme'}
                    onClick={changeTheme}
                >
                    <FontAwesomeIcon icon={theme ? faSun : faMoon} />
                </Button>
            </ButtonGroup>
            {!isHidden && (
                <Modal title="How to Play" onClick={changeModalVisibility}>
                    <p>
                        The goal of this game is to practice your memory skills, remembering as many
                        cards as you can. Once you reach a score of {totalCardCount}, you win!
                    </p>
                    <p>
                        Click any of the tarot cards and you'll receive a point. But be careful,
                        clicking a card you already clicked on resets your score.
                    </p>
                    <p>Simple, right? Now go on and use that noggin of yours!</p>
                    <p>
                        <small>P.S. you get a super special prize if you win 😉</small>
                    </p>
                </Modal>
            )}
        </header>
    );
};

export default Header;
