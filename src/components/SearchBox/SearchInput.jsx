import React from 'react';
import './SearchInput.css';

const SearchInput = ({ value, onChangeText ,onFormSubmit}) => {
  React.useEffect(() => {
    let input = document.querySelector('input');
    input.addEventListener('input', onChangeText);
    return input.removeEventListener('input', onChangeText);
  }, []);

  return (
    <div className="search-container">
      <form onSubmit={onFormSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChangeText}
        placeholder="Search movie by name"
      />
      </form>
    </div>
  );
};

export default SearchInput;
