import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import AppearanceContextProvider, {
  AppearanceContext,
} from '../../contexts/AppearanceContextProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import TestAppContainer from '../../test/TestAppContainer';

import '@testing-library/jest-dom/extend-expect';

import Body from './Body.component';

describe('Body', () => {
  it('renders basic correctly', () => {
    render(
      <TestAppContainer>
        <Body />
      </TestAppContainer>
    );

    expect(
      screen.getByText('Video Tour | Welcome to Wizeline Guadalajara')
    ).toBeInTheDocument();
  });
});
