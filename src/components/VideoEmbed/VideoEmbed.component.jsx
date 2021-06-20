import React from 'react';

function VideoEmbed(props) {
  return (
    <iframe
      width="560"
      height="315"
      src={props.url}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default VideoEmbed;
