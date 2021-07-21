import React, { useState } from 'react';
import renderer, { act } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import TestAppContainer from '../../test/TestAppContainer';
import SearchContextProvider, {
  SearchContext,
} from '../../contexts/SearchContextProvider';
import NotFoundPage from './NotFound.page';

describe('Home Page', () => {
  const flushPromises = () => new Promise(setImmediate);

  const testItems = {
    items: {
      etag: 'kpIJtPbs0nr37t4InqV925ytEXY',
      id: {
        videoId: 'C0DPdy98e4c',
      },
      snippet: {
        title: `TEST VIDEO`,
        description: `COUNTING LEADER AND TONE`,
        thumbnails: {
          medium: {
            url: 'https://i.ytimg.com/vi/C0DPdy98e4c/mqdefault.jpg',
          },
        },
      },
    },
  };

  it('renders basic components correctly', () => {
    render(
      <TestAppContainer>
        <NotFoundPage />
      </TestAppContainer>
    );
    expect(screen.getByTestId('not-found')).toBeTruthy();
  });
});
