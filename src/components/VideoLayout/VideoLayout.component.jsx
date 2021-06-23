import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.main`
  width: 99vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0rem;
  margin-right: 0px;
`;

function VideoLayout({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default VideoLayout;
