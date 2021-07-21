import styled from 'styled-components';

const ImageHoverText = styled.p`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* background: rgba(204, 204, 204, 0.72);
  color: #000; */
  background: ${(props) =>
    props.theme.darkMode ? `rgba(0, 0, 0, 0.72)` : `rgba(29, 106, 154, 0.72)`};
  color: white;
  visibility: hidden;
  height: auto;
  opacity: 0;
  text-align: center;

  /* transition effect. not necessary */
  transition: opacity 0.2s, visibility 0.2s;
  margin-top: 0;
  margin-bottom: 0;
`;

const ImgWrapper = styled.div`
  position: relative;
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  display: inline-block;
  margin-bottom: inherit;
  bottom: 0;

  &:hover ${ImageHoverText} {
    visibility: visible;
    opacity: 1;
  }
`;

const Styled = {
  ImageHoverText,
  ImgWrapper,
};

export default Styled;
