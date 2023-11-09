import React from "react";
import { useLocale } from "../../contexts/LocaleContext";

const LocaleToggler = () => {
    const { isIndonesiaLocale, toggleLocale } = useLocale();

    return (
        <div className={isIndonesiaLocale ? 'id-locale' : 'en-locale'}>
            <button className="locale-toggler" onClick={toggleLocale}>
                {isIndonesiaLocale ? 'ID' : 'EN'}
            </button>
        </div>
    );
}

export default LocaleToggler;