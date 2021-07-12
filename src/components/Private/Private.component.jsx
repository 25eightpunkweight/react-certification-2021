import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { storage } from '../../utils/storage';

function Private({ children, ...rest }) {
  const isLoggedIn = !!storage.get('account');

  return (
    <Route {...rest} render={() => (isLoggedIn ? children : <Redirect to="/login" />)} />
  );
}

export default Private;
