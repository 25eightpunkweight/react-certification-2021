import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardTitleDiv = styled.div`
  margin: 1px;
  height: 56px;
`;

const CardTitleText = styled.h4`
  color: black;
  font-size: 1em;
`;

function CardTitle(props) {
  const videoId = props.item.id.videoId;
  const videoTitle = props.item.snippet.title;
  const videoDescription = props.item.snippet.description;

  return (
    <CardTitleDiv>
      <Link
        to={{
          pathname: `/video/${videoId}`,
          state: {
            videoId,
            videoTitle,
            videoDescription,
          }
        }}
      >
        <CardTitleText> {videoTitle} </CardTitleText>
      </Link>
    </CardTitleDiv>
  );
}

export default CardTitle;
