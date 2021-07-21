import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Styled from './CardTitle.styled';

import { AppearanceContext } from '../../contexts/AppearanceContextProvider';

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
    <Styled.CardTitleDiv>
      <Link to={path}>
        <Styled.CardTitleText theme={{ darkMode: darkModeContext.darkMode }}>
          {videoTitle}
        </Styled.CardTitleText>
      </Link>
    </Styled.CardTitleDiv>
  );
}

export default CardTitle;
