import React, { useState } from 'react';

// query is the state
// SearchHandler is a function for changing the state.
const SearchContext = React.createContext({
  query: '',
  searchHandler: () => {},
});

const SearchContextProvider = (props) => {
  const [query, setQuery] = useState('');

  const searchHandler = (input) => {
    setQuery(input);
  };

  return (
    <SearchContext.Provider value={{ query, searchHandler }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContext };

export default SearchContextProvider;
