import React, { useLayoutEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import Body from '../Body';
import { random } from '../../utils/fns';
import { useInput } from '../../hooks/input-hook';

function App() {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (data) => {
    debugger;
    setSearchTerm(data);
  };

  return (
    <BrowserRouter>
      <Header onSubmit={handleSubmit} />
      <Body searchTerm={searchTerm} />
    </BrowserRouter>
  );
}

export default App;
