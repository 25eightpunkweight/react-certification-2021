import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ToggleButton from '../ToggleButton';

const StyledLink = styled(Link)`
  color: black;
`;

const LinkButtonLeft = styled(Link)`
  left: 0%;
  float: left;
  height: fit-content;
  /* Adapt the colors based on primary prop */
  background: #ede9e8;
  color: gray;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

const FormWrapper = styled.div`
  padding-top: 10px;
  left: 50%;
  right: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const SearchField = styled.input`
  padding: 12px 15px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 18px;
  min-width: 400px;
`;

const DarkModeToggleButton = styled(ToggleButton)`
  float: right;
`;

const HeaderWrap = styled.header`
  display: flex;
  flex-direction: row;
  text-align: center;
  color: white;
  margin: 0;
  height: 4em;
  /* background-color: rgba(29, 106, 154, 1); */
  background-color: ${(props) =>
    props.theme.darkMode ? `rgb(0, 52, 85)` : `rgb(29, 106, 154, 1)`};
`;

const DropDownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 300px;
  z-index: 2;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
`;

const StyledUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background: whitesmoke;
`;

const StyledLI = styled.li`
  color: black;
  padding: 8px 12px;
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
`;

const DropDownMenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropDownMenuButton = styled.div`
  padding: 0;
  width: 50px;
  height: 50px;
  margin-top: 10%;
  border: 0;
  background-color: #fff;
  color: #333;
  background-color: transparent;
  cursor: pointer;
  outline: 0;
  font-size: 40px;
`;

const Styled = {
  LinkButtonLeft,
  FormWrapper,
  SearchField,
  DarkModeToggleButton,
  HeaderWrap,
  DropDownMenu,
  StyledUL,
  StyledLI,
  DropDownMenuContainer,
  DropDownMenuButton,
  StyledLink,
};

export default Styled;
