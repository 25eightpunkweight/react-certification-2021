import React, { useState, useContext } from 'react';

import Styled from './Favorites.styled';
import CardItem from '../../components/CardItem';
import { AccountContext } from '../../contexts/AccountContextProvider';
import { storage } from '../../utils/storage';

function FavoritesPage() {
  const loggedInContext = useContext(AccountContext);

  // eslint-disable-next-line no-unused-vars
  // const [favVids, setFavVids] = useState(loggedInContext.favoriteVideos);
  const favVids = storage.get('favoriteVideos').items;

  const hasFavVids = !favVids;

  if (hasFavVids) {
    return <div>You haven&apos;t added any favorite videos yet!</div>;
  }

  return (
    <Styled.FavoritesPageWrapper>
      <Styled.Container>
        <Styled.Cards>
          {favVids.map((d) => {
            return <CardItem item={d} fav />;
          })}
        </Styled.Cards>
      </Styled.Container>
    </Styled.FavoritesPageWrapper>
  );
}

export default FavoritesPage;
