import React from 'react';
import propTypes from 'prop-types';

const SearchInput = ({ value, onChange }) => {
    return (
        <div className='search-input-container'>
            <input
                className='search-input'
                type="text"
                placeholder="Search notes..."
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