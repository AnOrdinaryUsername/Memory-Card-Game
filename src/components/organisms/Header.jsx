import { faGithub, faMoon, faSun } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
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
                    ariaLabel="View the source code repository."
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
                    <p>Click the cards and earn a score!</p>
                    {/* Maybe add a gif/mp4 for easier visualization */}
                </Modal>
            )}
        </header>
    );
};

export default Header;
