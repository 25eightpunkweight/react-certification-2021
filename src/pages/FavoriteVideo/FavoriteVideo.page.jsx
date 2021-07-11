import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import Styled from '../Video/Video.styled';
import VideoEmbed from '../../components/VideoEmbed';
import RelatedVideos from '../../components/RelatedVideos';
import { AppearanceContext } from '../../contexts/AppearanceContextProvider';

function FavoriteVideo() {
  const location = useLocation();
  const { videoId, videoTitle, videoDescription, etag } = location.state;
  const buildURL = `https://www.youtube.com/embed/${videoId}`;

  const darkModeContext = useContext(AppearanceContext);

  return (
    <Styled.VideoSection data-testid="video-display">
      <Styled.VideoDiv>
        <VideoEmbed url={buildURL} />
      </Styled.VideoDiv>
      <Styled.DescriptionAndRelatedVideo>
        <Styled.VideoDetailsCard theme={{ darkMode: darkModeContext.darkMode }}>
          <Styled.VideoTitle theme={{ darkMode: darkModeContext.darkMode }}>
            {videoTitle}
          </Styled.VideoTitle>
          <Styled.VideoDescription theme={{ darkMode: darkModeContext.darkMode }}>
            <p>{videoDescription}</p>
          </Styled.VideoDescription>
        </Styled.VideoDetailsCard>
        <RelatedVideos favVids />
      </Styled.DescriptionAndRelatedVideo>
    </Styled.VideoSection>
  );
}

export default FavoriteVideo;
