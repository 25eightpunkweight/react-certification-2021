import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';
import SearchContextProvider from './contexts/SearchContextProvider';
import AppearanceContextProvider from './contexts/AppearanceContextProvider';
import AccountContextProvider from './contexts/AccountContextProvider';



ReactDOM.render(
  <React.StrictMode>
    <AccountContextProvider>
      <AppearanceContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </AppearanceContextProvider>
    </AccountContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
