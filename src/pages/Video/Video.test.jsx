import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import Video from './Video.page';

describe('Video', () => {
  it('renders correctly', () => {
    const history = createMemoryHistory();
    const route = '/video/C0DPdy98e4c';
    const state = {
      videoId: 'C0DPdy98e4c',
      videoTitle: 'TEST VIDEO',
      videoDescription: 'COUNTING LEADER AND TONE',
      etag: 'test#testvideo',
  };
    history.push(route, state);

    render(
      <Router history={history}>
        <Video />
      </Router>
    );
    expect(screen.getByTestId('video-display')).toHaveTextContent('TEST VIDEO');
    expect(screen.getByTestId('video-display')).toHaveTextContent(
      'COUNTING LEADER AND TONE'
    );
  });
});
