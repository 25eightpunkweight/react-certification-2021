import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import { getByText, render, screen } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import CardItem from './index';
import CardTitle from '../CardTitle';
import AppearanceContextProvider, {
  AppearanceContext,
} from '../../contexts/AppearanceContextProvider';
import TestAppContainer from '../../test/TestAppContainer';
// import mockData from './test_data/mock.json';

const wrapper = ({ children }) => (
  <AppearanceContext.Provider value={{ darkMode: false, themeChangeHandler: jest.fn }}>
    {children}
  </AppearanceContext.Provider>
);

describe('render CardItem Component', () => {
  const testItem = {
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
  };

  test('CardItem element exists', () => {
    const { result } = renderHook(() => <CardItem item={testItem} fav={false} />, {
      wrapper,
    });

    expect(result.current.type).toBe(CardItem);
  });
});
