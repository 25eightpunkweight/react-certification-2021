import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import Styled from './Video.styled';
import VideoEmbed from '../../components/VideoEmbed';
import RelatedVideos from '../../components/RelatedVideos';
import { AppearanceContext } from '../../contexts/AppearanceContextProvider';
import { AccountContext } from '../../contexts/AccountContextProvider';
import { storage } from '../../utils/storage';

function Video() {
  const location = useLocation();

  let routeState;

  if (location.state) {
    storage.set('videoLocationState', JSON.stringify(location.state));
    routeState = location.state;
  } else {
    routeState = storage.get('videoLocationState');
    if (routeState) routeState = JSON.parse(routeState);
  }
  const { videoId, videoTitle, videoDescription, etag } = routeState;
  const buildURL = `https://www.youtube.com/embed/${videoId}`;

  const darkModeContext = useContext(AppearanceContext);
  const loggedInContext = useContext(AccountContext);

  const isLoggedIn = !!storage.get('account');
  const store = storage;
  const addToFavorites = () => {
    const append = {
      // making it look more like the youtube search result item for more familiar reading
      etag,
      id: {
        videoId,
      },
      snippet: {
        title: videoTitle,
        description: videoDescription,
        thumbnails: {
          default: {
            url: `https://i.ytimg.com/vi/${videoId}/default.jpg`,
          },
          medium: {
            url: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
          },
        },
      },
    };
    const faveVideos = store.get('favoriteVideos')
      ? store.get('favoriteVideos')
      : { items: [] };
    faveVideos.items.push(append);
    store.set('favoriteVideos', faveVideos);
  };

  return (
    <Styled.VideoSection data-testid="video-display">
      <Styled.VideoDiv>
        <VideoEmbed url={buildURL} />
      </Styled.VideoDiv>
      <Styled.DescriptionAndRelatedVideo>
        <Styled.VideoDetailsCard theme={{ darkMode: darkModeContext.darkMode }}>
          {isLoggedIn && (
            <Styled.ButtonWrapper>
              <Styled.FavButton onClick={addToFavorites}>
                Add to Favorites
              </Styled.FavButton>
            </Styled.ButtonWrapper>
          )}
          <Styled.VideoTitle theme={{ darkMode: darkModeContext.darkMode }}>
            {videoTitle}
          </Styled.VideoTitle>
          <Styled.VideoDescription theme={{ darkMode: darkModeContext.darkMode }}>
            <p>{videoDescription}</p>
          </Styled.VideoDescription>
        </Styled.VideoDetailsCard>
        <RelatedVideos videoId={videoId} />
      </Styled.DescriptionAndRelatedVideo>
    </Styled.VideoSection>
  );
}

export default Video;
