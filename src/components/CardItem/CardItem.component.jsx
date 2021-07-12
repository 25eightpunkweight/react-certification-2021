import React, { useContext } from 'react';
import Styled from './CardItem.styled';

import ImgWrap from '../ImgWrap';
import CardTitle from '../CardTitle';

import { AppearanceContext } from '../../contexts/AppearanceContextProvider';

function CardItem(props) {
  const darkModeContext = useContext(AppearanceContext);
  const { item, fav } = props;

  return (
    <Styled.CardItemDiv
      key={item.etag}
      theme={{ darkMode: darkModeContext.darkMode }}
      data-testid="card-item"
    >
      <CardTitle item={item} fav={fav} />
      <ImgWrap
        image={item.snippet.thumbnails.medium.url}
        hover_text={item.snippet.description}
      />
    </Styled.CardItemDiv>
  );
}

export default CardItem;
