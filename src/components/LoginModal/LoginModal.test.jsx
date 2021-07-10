import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import AppearanceContextProvider, {
  AppearanceContext,
} from '../../contexts/AppearanceContextProvider';
import AccountContextProvider, {
  AccountContext,
} from '../../contexts/AccountContextProvider';
import TestAppContainer from '../../test/TestAppContainer';

import LoginModal from './LoginModal.component';

// const wrapper = ({ children }) => (
//   <AppearanceContext.Provider value={{ darkMode: false, themeChangeHandler: jest.fn }}>
//     {children}
//   </AppearanceContext.Provider>
// );

describe('LoginModal', () => {
  it('LoginModal renders correctly', () => {
    render(
      <TestAppContainer>
        <LoginModal />
      </TestAppContainer>
    );

    expect(screen.getByTestId('login-modal-background')).toBeTruthy();
  });

});
