import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import VideoEmbed from '../../components/VideoEmbed';
import RelatedVideos from '../../components/RelatedVideos';
import { AppearanceContext } from '../../contexts/AppearanceContextProvider';
import { AccountContext } from '../../contexts/AccountContextProvider';
import { storage } from '../../utils/storage';

const VideoSection = styled.section`
  margin-top: 5rem;
  width: 100%;
  height: fit-content;
`;

const VideoDetailsCard = styled.div`
  word-wrap: break-word;
  width: 100%;
  height: fit-content;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: ${(props) =>
    props.theme.darkMode ? `rgb(0, 0, 0)` : `rgb(256, 256, 256)`};
  padding: 5px;
`;

const VideoDiv = styled.div`
  /* width: 100%;
  height: auto;
  margin-right: 0px; */
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
`;

const DescriptionAndRelatedVideo = styled.div`
  display: flex;
  flex-direction: column;
`;

const FavButton = styled.button`
  box-shadow: inset 0px 0px 15px 3px #23395e;
  background: linear-gradient(to bottom, #2e466e 5%, #415989 100%);
  background-color: #2e466e;
  border-radius: 17px;
  border: 1px solid #1f2f47;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  padding: 6px 13px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #263666;

  &:hover {
    background: linear-gradient(to bottom, #415989 5%, #2e466e 100%);
    background-color: #415989;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

const VideoTitle = styled.h1`
  color: ${(props) => (props.theme.darkMode ? `rgb(256, 256, 256)` : `rgb(0, 0, 0)`)};
`;

const VideoDescription = styled.div`
  color: ${(props) => (props.theme.darkMode ? `rgb(256, 256, 256)` : `rgb(0, 0, 0)`)};
  overflow-y: scroll;
  word-wrap: break-word;
  overflow: auto;
  height: 10rem;
`;

const ButtonWrapper = styled.div`
  float: right;
`;

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

  const isLoggedIn = !!loggedInContext.account;

  const addToFavorites = () => {
    const video = {
      videoId,
      title: videoTitle,
      description: videoDescription,
      etag,
    };
    loggedInContext.addFaveVideo(video);
  };

  return (
    <VideoSection data-testid="video-display">
      <VideoDiv>
        <VideoEmbed url={buildURL} />
      </VideoDiv>
      <DescriptionAndRelatedVideo>
        <VideoDetailsCard theme={{ darkMode: darkModeContext.darkMode }}>
          {isLoggedIn && (
            <ButtonWrapper>
              <FavButton onClick={addToFavorites}>Add to Favorites</FavButton>
            </ButtonWrapper>
          )}
          <VideoTitle theme={{ darkMode: darkModeContext.darkMode }}>
            {videoTitle}
          </VideoTitle>
          <VideoDescription theme={{ darkMode: darkModeContext.darkMode }}>
            <p>{videoDescription}</p>
          </VideoDescription>
        </VideoDetailsCard>
        <RelatedVideos videoId={videoId} />
      </DescriptionAndRelatedVideo>
    </VideoSection>
  );
}

export default Video;
