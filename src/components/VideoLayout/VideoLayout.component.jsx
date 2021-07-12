import React from 'react';
import Styled from './VideoLayout.styled';

function VideoLayout({ children }) {
  return <Styled.LayoutWrapper>{children}</Styled.LayoutWrapper>;
}

export default VideoLayout;