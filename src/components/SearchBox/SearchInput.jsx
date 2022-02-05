import React from 'react';
import styled from 'styled-components';

const SearchContainer=styled.div`  
display: flex;
justify-content: center;
margin-bottom: 24px;`

const SearchContainerInput=styled.input`
height: 32px;
width: 300px;
padding: 0px 12px 0px 12px;
`

const SearchInput = ({ value, onChangeText ,onFormSubmit}) => {
  React.useEffect(() => {
    let input = document.querySelector('input');
    input.addEventListener('input', onChangeText);
    return input.removeEventListener('input', onChangeText);
  }, []);

  return (
    <SearchContainer>
      <form onSubmit={onFormSubmit}>
      <SearchContainerInput
        type="text"
        value={value}
        onChange={onChangeText}
        placeholder="Search movie by name"
      />
      </form>
      </SearchContainer>
  );
};

export default SearchInput;


