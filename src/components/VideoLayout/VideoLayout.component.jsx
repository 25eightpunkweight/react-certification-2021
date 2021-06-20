import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
`;

function VideoLayout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default VideoLayout;
