import React from "react";
import { useTheme } from "../../contexts/themeContext";

const ThemeToggler = () => {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <p>{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</p>
        </div>
    );
}

export default ThemeToggler;