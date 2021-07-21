import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import AppearanceContextProvider, {
  AppearanceContext,
} from '../../contexts/AppearanceContextProvider';
import { BrowserRouter as Router } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import Header from './Header.component';

describe('Render Input', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    const route = '/video/C0DPdy98e4c';
    const state = {
      videoId: 'C0DPdy98e4c',
      videoTitle: 'TEST VIDEO',
      videoDescription: 'COUNTING LEADER AND TONE',
      etag: 'test#testvideo',
    };
    // history.push(route, state);
  });

  it('should render Header Component', () => {
    render(
      <AppearanceContext.Provider value={{ darkMode: false, themeChangeHandler: jest.fn }}>
        <Router>
          <Header />
        </Router>
      </AppearanceContext.Provider>
    );
    expect(screen.getByTestId('search-input')).toBeTruthy();
    expect(screen.getByTestId('go-to-home')).toBeTruthy();
    expect(screen.getByTestId('toggle')).toBeTruthy();
    expect(screen.getByTestId('header-account-dropdown')).toBeTruthy();
  });
});