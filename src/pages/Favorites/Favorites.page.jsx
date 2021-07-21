import React from 'react';

import Styled from './Favorites.styled';
import CardItem from '../../components/CardItem';
import { storage } from '../../utils/storage';

function FavoritesPage() {
  const store = storage;

  const favVids = () => {
    if (store.get('favoriteVideos')) {
      return store.get('favoriteVideos').items;
    }
    return [];
  };

  if (!favVids().length) {
    return <div>You haven&apos;t added any favorite videos yet!</div>;
  }

  return (
    <Styled.FavoritesPageWrapper>
      <Styled.Container>
        <Styled.Cards>
          {favVids().map((d) => {
            return <CardItem item={d} fav />;
          })}
        </Styled.Cards>
      </Styled.Container>
    </Styled.FavoritesPageWrapper>
  );
}

export default FavoritesPage;
