import React from 'react';
import { render, screen } from '@testing-library/react';
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
