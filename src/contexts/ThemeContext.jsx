import React, { createContext, useContext, useState, useEffect } from 'react';
     
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);
 
export const ThemeProvider = ({ children }) => {
    const [ isDarkTheme, setIsDarkTheme ] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};

 
export default ThemeContext;