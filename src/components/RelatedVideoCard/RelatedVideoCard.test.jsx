import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import AppearanceContextProvider, {
  AppearanceContext,
} from '../../contexts/AppearanceContextProvider';

import RelatedVideoCard from './index';

const wrapper = ({ children }) => (
  <AppearanceContext.Provider value={{ darkMode: false, themeChangeHandler: jest.fn }}>
    {children}
  </AppearanceContext.Provider>
);

describe('RelatedVideoCard', () => {
  const testItem = {
    etag: 'kpIJtPbs0nr37t4InqV925ytEXY',
    id: {
      videoId: 'C0DPdy98e4c',
    },
    snippet: {
      title: `TEST VIDEO`,
      description: `COUNTING LEADER AND TONE`,
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
        }
      }
    },
  };

  it('RelatedVideoCard element exists', () => {
    const { result } = renderHook(
      () => <RelatedVideoCard key={testItem.etag} item={testItem} favVids={false} />,
      {
        wrapper,
      }
    );

    expect(result.current.type).toBe(RelatedVideoCard);
  });

  // test.skip('calls onClick when clicked', () => {
  //   const handleClick = jest.fn();
  //   render(<DrawerToggle onClick={handleClick} />);
  //   const toggle = screen.getByTestId('drawer-toggle');
  //   fireEvent.click(toggle);
  //   expect(handleClick).toHaveBeenCalledTimes(1);
  // });
});
