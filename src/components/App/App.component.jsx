import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import Body from '../Body';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Body />
    </BrowserRouter>
  );
}

export default App;
