import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const VideoCard = styled.div`

`;

function RelatedVideoCard(item) {
  const videoId = item.id.videoId;
  const videoTitle = item.snippet.title;
  const videoDescription = item.snippet.description;

  return (
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
      <VideoCard>
        <h3>{videoTitle}</h3>
      </VideoCard>
    </Link>
  );
}

export default RelatedVideoCard;
