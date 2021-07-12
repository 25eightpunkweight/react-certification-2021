import React from 'react';
import styled from 'styled-components';
import Styled from './CenteredImage.styled';

function CenteredImage(props) {
  return <Styled.CenteredImageWrapper src={props.image} />;
}

export default CenteredImage;
