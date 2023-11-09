import React from 'react';
import propTypes from 'prop-types';
import { useLocale } from '../../contexts/LocaleContext';

const SearchInput = ({ value, onChange }) => {
    const {isIndonesiaLocale} = useLocale();
    return (
        <div className='search-input-container'>
            <input
                className='search-input'
                type="text"
                placeholder={isIndonesiaLocale ? 'Cari catatan ...' : "Search notes..."}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

SearchInput.propTypes = {
    value: propTypes.string,
    onChange: propTypes.func,
}

export default SearchInput;