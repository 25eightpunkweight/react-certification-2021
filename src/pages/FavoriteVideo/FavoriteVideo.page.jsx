import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import Styled from '../Video/Video.styled';
import VideoEmbed from '../../components/VideoEmbed';
import RelatedVideos from '../../components/RelatedVideos';
import { AppearanceContext } from '../../contexts/AppearanceContextProvider';
import { storage } from '../../utils/storage';

function FavoriteVideo() {
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const { videoId, videoTitle, videoDescription, etag } = location.state;
  const buildURL = `https://www.youtube.com/embed/${videoId}`;

  const darkModeContext = useContext(AppearanceContext);
  const store = storage;
  const history = useHistory();
  const removeFromFavorites = () => {
    const favVids = store.get('favoriteVideos');
    const filtered = favVids.items.filter((e) => {
      return e.id.videoId != videoId;
    });
    store.set('favoriteVideos', {
      items: filtered,
    });
    if (filtered.length) { // if you still have other favorite videos, redirect to the next one
      const nextVideo = filtered[0];
      history.push({
        pathname: `/favorites/${nextVideo.id.videoId}`,
        state: {
          videoId: nextVideo.id.videoId,
          videoTitle: nextVideo.snippet.title,
          videoDescription: nextVideo.snippet.description,
          etag: nextVideo.etag,
        },
      });
    } else { // if no more favorite videos, redirect to home instead
      history.push('/');
    }
  };

  return (
    <Styled.VideoSection data-testid="video-display">
      <Styled.VideoDiv>
        <VideoEmbed url={buildURL} />
      </Styled.VideoDiv>
      <Styled.DescriptionAndRelatedVideo>
        <Styled.VideoDetailsCard theme={{ darkMode: darkModeContext.darkMode }}>
          <Styled.ButtonWrapper>
            <Styled.FavButton onClick={removeFromFavorites}>
              Remove From Favorites
            </Styled.FavButton>
          </Styled.ButtonWrapper>
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
