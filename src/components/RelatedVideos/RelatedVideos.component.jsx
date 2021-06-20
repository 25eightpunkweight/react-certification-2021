import React from 'react';
import styled from 'styled-components';

import RelatedVideoCard from '../RelatedVideoCard';

const RelatedVideosWrapper = styled.div``;

function RelatedVideos(props) {
  console.log(props.videos);
  return (
    <RelatedVideosWrapper>
      {props.videos.map((d) => RelatedVideoCard(d))}
    </RelatedVideosWrapper>
  );
}

export default RelatedVideos;
