import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';

export default function TestAppContainer({ children, location }) {
  return <BrowserRouter location={location}>{children}</BrowserRouter>;
}
