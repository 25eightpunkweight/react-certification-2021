import React from 'react';
import Styled from './CenteredImage.styled';

function CenteredImage(props) {
  return <Styled.CenteredImageWrapper src={props.image} />;
}

export default CenteredImage;
