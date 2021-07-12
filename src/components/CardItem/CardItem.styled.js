import styled from 'styled-components';

const CardItemDiv = styled.div`
  height: 330px;
  background-color: ${(props) => (props.theme.darkMode ? `#000` : `white`)};
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 5px;
  flex-basis: calc(20% - 22px);
  position: relative;
`;

const Styled = {
  CardItemDiv,
};

export default Styled;
