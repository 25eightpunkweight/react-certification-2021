import React, { useState } from 'react';
import renderer, { act } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import RelatedVideos from './RelatedVideos.component';
import TestAppContainer from '../../test/TestAppContainer';

describe('Related Videos Component', () => {
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

  it('renders basic components correctly', async () => {
    render(
      <TestAppContainer>
        <RelatedVideos videoId='C0DPdy98e4c'/>
      </TestAppContainer>
    );

    await new Promise((r) => setTimeout(r, 2000));
    expect(screen.getByTestId('related-videos')).toBeTruthy();
  });

  it('should show related videos according to the video', async () => {
    render(
      <TestAppContainer>
        <RelatedVideos videoId='C0DPdy98e4c'/>
      </TestAppContainer>
    );

    await new Promise((r) => setTimeout(r, 2000));
    expect(screen.getByText('Countdown v03')).toBeTruthy();
  });
});
