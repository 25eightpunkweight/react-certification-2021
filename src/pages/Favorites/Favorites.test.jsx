import React from 'react';
import renderer from 'react-test-renderer';
import TestAppContainer from '../../test/TestAppContainer';
import FavoritesPage from './Favorites.page';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <TestAppContainer>
        <FavoritesPage />
      </TestAppContainer>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
