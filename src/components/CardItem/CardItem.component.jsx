import React from 'react';
import styled from 'styled-components';

import ImgWrap from '../ImgWrap';
import CardTitle from '../CardTitle';

const CardItemDiv = styled.div`
  height: 330px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 5px;
  flex-basis: calc(20% - 22px);
  position: relative;
`;

function CardItem(item) {
  return (
    <CardItemDiv key={item.etag}>
      <CardTitle item={item} />
      <ImgWrap
        image={item.snippet.thumbnails.medium.url}
        hover_text={item.snippet.description}
      />
    </CardItemDiv>
  );
}

export default CardItem;
