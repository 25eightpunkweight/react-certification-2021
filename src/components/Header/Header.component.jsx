import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../../contexts/SearchContextProvider';

const ButtonLeft = styled.button`
  left: 0%;
  float: left;
  /* Adapt the colors based on primary prop */
  background: #ede9e8;
  color: gray;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

const ButtonRight = styled.button`
  right: 100%;
  float: right;
  /* Adapt the colors based on primary prop */
  background: white;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

const SearchField = styled.input`
  padding: 12px 15px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 18px;
  min-width: 400px;
`;

const HeaderWrap = styled.header`
  text-align: center;
  color: white;
  margin: 0;
  height: 5em;
  background-color: black;
`;

function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const searchContext = useContext(SearchContext);

  const handleInput = () => {
    searchContext.searchHandler(searchQuery);
  };

  return (
    <HeaderWrap>
      <ButtonLeft>Navigation</ButtonLeft>
      <form onSubmit={handleInput}>
        <SearchField type="text" onChange={(e) => setSearchQuery(e.target.value)} />
      </form>
      <ButtonRight>Login</ButtonRight>
    </HeaderWrap>
  );
}

export default Header;
