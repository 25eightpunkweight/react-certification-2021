import React from 'react';
import { render, screen } from '@testing-library/react';
import TestAppContainer from '../../test/TestAppContainer';
import Header from '.';

describe('Render Input', () => {
  it('should render Header Component', () => {
    const { result } = render(<Header />);
    console.log(result);
  });
});