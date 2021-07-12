import React, { useContext } from 'react';
import Styled from './ImgWrap.styled';

import CenteredImage from '../CenteredImage';

import { AppearanceContext } from '../../contexts/AppearanceContextProvider';

function ImgWrap(props) {
  const darkModeContext = useContext(AppearanceContext);

  return (
    <Styled.ImgWrapper>
      <CenteredImage image={props.image} />
      <Styled.ImageHoverText theme={{ darkMode: darkModeContext.darkMode }}>
        {props.hover_text}
      </Styled.ImageHoverText>
    </Styled.ImgWrapper>
  );
}

export default ImgWrap;
