import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AppearanceContext } from '../../contexts/AppearanceContextProvider';

const CardTitleDiv = styled.div`
  margin: 1px;
  height: 56px;
`;

const CardTitleText = styled.h4`
  /* color: blue; */
  color: ${(props) => (props.theme.darkMode ? `rgb(256, 256, 256)` : `rgb(0, 0, 0)`)};
  font-size: 1em;
`;

function CardTitle(props) {
  const {
    fav,
    item: {
      id: { videoId },
      etag,
      snippet: { title: videoTitle, description: videoDescription },
    },
  } = props;

  const darkModeContext = useContext(AppearanceContext);

  const path = () => {
    const pathRoute = fav ? 'favorites' : 'video';
    return {
      pathname: `/${pathRoute}/${videoId}`,
      state: {
        videoId,
        videoTitle,
        videoDescription,
        etag,
      },
    };
  };

  return (
    <CardTitleDiv>
      <Link to={path}>
        <CardTitleText theme={{ darkMode: darkModeContext.darkMode }}>
          {videoTitle}
        </CardTitleText>
      </Link>
    </CardTitleDiv>
  );
}

export default CardTitle;
