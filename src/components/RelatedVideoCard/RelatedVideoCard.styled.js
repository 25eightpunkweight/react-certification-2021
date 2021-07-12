import styled from 'styled-components';

const VideoCardTitle = styled.div`
  padding-left: 7.5em;
  width: 394px;
  color: ${(props) => (props.theme.darkMode ? `rgb(256, 256, 256)` : `rgb(0, 0, 0)`)};
`;

const CardWrapper = styled.div`
  height: 120px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: ${(props) =>
    props.theme.darkMode ? `rgb(0, 0, 0)` : `rgb(256, 256, 256)`};
  margin: 5px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  float: left;
  border-style: solid;
`;

const VideoThumbnailWrapper = styled.div`
  height: 90px;
  width: 120px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  float: left;
  margin-right: 3px;
`;

const VideoThumbnail = styled.img`
  height: 90px;
  width: 120px;
`;

const Styled = {
  VideoCardTitle,
  CardWrapper,
  VideoThumbnailWrapper,
  VideoThumbnail,
};

export default Styled;
