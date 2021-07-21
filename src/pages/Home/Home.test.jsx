import React, { useState } from 'react';
import renderer, { act } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from './Home.page';
import TestAppContainer from '../../test/TestAppContainer';
import SearchContextProvider, {
  SearchContext,
} from '../../contexts/SearchContextProvider';

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
        <Home />
      </TestAppContainer>
    );
    expect(screen.getByTestId('cards')).toBeTruthy();
  });

  it('show a card item with specific card', () => {
    React.useState = jest
      .fn()
      .mockReturnValueOnce([false, {}])
      .mockReturnValueOnce([false, {}]);

    render(
      <TestAppContainer>
        <Home />
      </TestAppContainer>
    );

    expect(screen.getByText('Video Tour | Welcome to Wizeline Guadalajara')).toBeTruthy();
  });

  // it('should show error', () => {
  //   const realUseState = React.useState;

  //   const stubData = true;

  //   jest.spyOn(React, 'useState').mockImplementationOnce(() => realUseState(stubData));

  //   render(
  //     <TestAppContainer>
  //       <Home />
  //     </TestAppContainer>
  //   );

  //   expect(screen.getByText('Error')).toBeTruthy();
  // });

  it('should change according to search query', async () => {
    const realUseContext = React.useContext;
    const realUseEffect = React.useEffect;

    const stubContext = { query: 'test video', searchHandler: {} };
    const returnData = testItems;


    // flushPromises();

    act(() => {
      jest.spyOn(React, 'useContext').mockImplementationOnce(() => stubContext);

      jest.spyOn(React, 'useEffect').mockImplementationOnce(() => testItems);
      render(
        <SearchContext.Provider value={{ query: 'test video', searchHandler: jest.fn }}>
          <TestAppContainer>
            <Home />
          </TestAppContainer>
        </SearchContext.Provider>
      );
    });

    // await waitFor(() => expect(useEffect).toHaveBeenCalledTimes(1))
    await new Promise((r) => setTimeout(r, 2000));
    expect(screen.getByText('TEST VIDEO')).toBeTruthy();
  });
});
