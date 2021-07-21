import React, { useState } from 'react';

// query is the state
// SearchHandler is a function for changing the state.
const AppearanceContext = React.createContext({
  darkMode: false,
  themeChangeHandler: () => {},
});



const AppearanceContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const themeChangeHandler = (theme) => {
    setDarkMode(theme);
  };

  return (
    <AppearanceContext.Provider value={{ darkMode, themeChangeHandler }}>
      {props.children}
    </AppearanceContext.Provider>
  );
};

export { AppearanceContext };

export default AppearanceContextProvider;
