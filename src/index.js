import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './global.css';
import SearchContextProvider from './contexts/SearchContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
