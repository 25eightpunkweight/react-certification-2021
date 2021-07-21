import styled from 'styled-components';

const CardTitleDiv = styled.div`
  margin: 1px;
  height: 56px;
`;

const CardTitleText = styled.h4`
  /* color: blue; */
  color: ${(props) => (props.theme.darkMode ? `rgb(256, 256, 256)` : `rgb(0, 0, 0)`)};
  font-size: 1em;
`;

const Styled = {
  CardTitleDiv,
  CardTitleText,
};

export default Styled;
