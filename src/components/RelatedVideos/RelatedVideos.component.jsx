import React from 'react';
import styled from 'styled-components';

import RelatedVideoCard from '../RelatedVideoCard';

const RelatedVideosWrapper = styled.div`
  overflow: scroll;
  height: 20em;
  width: 20em;
  float: right;
`;

function RelatedVideos(props) {
  return (
    <RelatedVideosWrapper>
      {props.videos.map((d) => RelatedVideoCard(d))}
    </RelatedVideosWrapper>
  );
}

export default RelatedVideos;
