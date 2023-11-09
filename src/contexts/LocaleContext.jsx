import React, { createContext, useContext, useState, useEffect } from 'react';
     
const LocaleContext = createContext();

export const useLocale = () => useContext(LocaleContext);
 
export const LocaleProvider = ({ children }) => {
    const [ isIndonesiaLocale, setIsIndonesiaLocale ] = useState(false);

    const toggleLocale = () => {
        setIsIndonesiaLocale((prevIsIndonesiaLocale) => !prevIsIndonesiaLocale);
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-Locale', isIndonesiaLocale ? 'Indonesia' : 'English');
    }, [isIndonesiaLocale]);

    return (
        <LocaleContext.Provider value={{ isIndonesiaLocale, toggleLocale }}>
            {children}
        </LocaleContext.Provider>
    )
};

 
export default LocaleContext;