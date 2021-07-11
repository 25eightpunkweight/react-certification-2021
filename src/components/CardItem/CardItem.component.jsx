import React, { useContext } from 'react';
import styled from 'styled-components';

import ImgWrap from '../ImgWrap';
import CardTitle from '../CardTitle';

import { AppearanceContext } from '../../contexts/AppearanceContextProvider';

const CardItemDiv = styled.div`
  height: 330px;
  background-color: ${(props) => (props.theme.darkMode ? `#000` : `white`)};
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 5px;
  flex-basis: calc(20% - 22px);
  position: relative;
`;

function CardItem(props) {
  const darkModeContext = useContext(AppearanceContext);
  const { item, fav } = props;

  return (
    <CardItemDiv
      key={item.etag}
      theme={{ darkMode: darkModeContext.darkMode }}
      data-testid="card-item"
    >
      <CardTitle item={item} fav={fav} />
      <ImgWrap
        image={item.snippet.thumbnails.medium.url}
        hover_text={item.snippet.description}
      />
    </CardItemDiv>
  );
}

export default CardItem;
