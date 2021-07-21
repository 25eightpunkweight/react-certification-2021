import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Styled from './RelatedVideoCard.styled';

import { AppearanceContext } from '../../contexts/AppearanceContextProvider';

function RelatedVideoCard(props) {
  const darkModeContext = useContext(AppearanceContext);

  const { item, favVids } = props;

  const { videoId } = item.id;

  const videoTitle = item.snippet.title;
  const videoDescription = item.snippet.description;
  const { etag } = item;

  const path = () => {
    const pathRoute = favVids ? 'favorites' : 'video';
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
    <Styled.CardWrapper key={item.etag} theme={{ darkMode: darkModeContext.darkMode }}>
      <Link data-testid="related-video-card" to={path} key={item.etag}>
        <Styled.VideoThumbnailWrapper>
          <Styled.VideoThumbnail src={item.snippet.thumbnails.default.url} />
        </Styled.VideoThumbnailWrapper>
        <Styled.VideoCardTitle theme={{ darkMode: darkModeContext.darkMode }}>
          <h5>{videoTitle}</h5>
        </Styled.VideoCardTitle>
      </Link>
    </Styled.CardWrapper>
  );
}

export default RelatedVideoCard;
