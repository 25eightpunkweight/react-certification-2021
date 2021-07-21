import React from 'react';
import Styled from './Layout.styled';

function Layout({ children }) {
  return <Styled.LayoutWrapper>{children}</Styled.LayoutWrapper>;
}

export default Layout;
