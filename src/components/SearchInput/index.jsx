import React from 'react';

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

export default SearchInput;