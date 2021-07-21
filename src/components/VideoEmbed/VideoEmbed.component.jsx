import React from 'react';
import Styled from './VideoEmbed.styled';

function VideoEmbed(props) {
  return (
    <Styled.VideoIframe
      src={props.url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default VideoEmbed;
