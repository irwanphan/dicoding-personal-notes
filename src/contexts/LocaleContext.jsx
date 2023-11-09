import React, { createContext, useContext, useState, useEffect } from 'react';
import propTypes from 'prop-types';

const LocaleContext = createContext();

export const useLocale = () => useContext(LocaleContext);
 
export const LocaleProvider = ({ children }) => {
    const [ isIndonesiaLocale, setIsIndonesiaLocale ] = useState(false);

    const toggleLocale = () => {
        setIsIndonesiaLocale((prevIsIndonesiaLocale) => !prevIsIndonesiaLocale);
        localStorage.setItem('isIndonesiaLocale', !isIndonesiaLocale);
    }

    useEffect(() => {
        localStorage.getItem('isIndonesiaLocale') === 'true' ? setIsIndonesiaLocale(true) : setIsIndonesiaLocale(false);
    }, [isIndonesiaLocale]);

    return (
        <LocaleContext.Provider value={{ isIndonesiaLocale, toggleLocale }}>
            {children}
        </LocaleContext.Provider>
    )
};

LocaleProvider.propTypes = {
    children: propTypes.node,
}
 
export default LocaleContext;