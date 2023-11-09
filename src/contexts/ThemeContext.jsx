import React, { createContext, useContext, useState, useEffect } from 'react';
import propTypes from 'prop-types';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);
 
export const ThemeProvider = ({ children }) => {
    const [ isDarkTheme, setIsDarkTheme ] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
        localStorage.setItem('isDarkTheme', !isDarkTheme);
    }

    useEffect(() => {
        localStorage.getItem('isDarkTheme') === 'true' ? setIsDarkTheme(true) : setIsDarkTheme(false);
    }, []);
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

ThemeProvider.propTypes = {
    children: propTypes.node,
}
 
export default ThemeContext;