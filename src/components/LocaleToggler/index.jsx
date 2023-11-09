import React from "react";
import { useLocale } from "../../contexts/LocaleContext";

const LocaleToggler = () => {
    const { isIndonesiaLocale, toggleLocale } = useLocale();

    return (
        <div className={isIndonesiaLocale ? 'id-locale locale-toggler-container' : 'en-locale local-toggler-container'}>
            <button className="locale-toggler" onClick={toggleLocale}>
                {isIndonesiaLocale ? 'ID' : 'EN'}
            </button>
        </div>
    );
}

export default LocaleToggler;