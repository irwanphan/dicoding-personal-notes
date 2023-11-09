import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggler = () => {
    const { isDarkTheme, toggleTheme } = useTheme();

    return (
        <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
            <button className="theme-toggler" onClick={toggleTheme}>
                {isDarkTheme ? <FiMoon /> : <FiSun />}
            </button>
        </div>
    );
}

export default ThemeToggler;