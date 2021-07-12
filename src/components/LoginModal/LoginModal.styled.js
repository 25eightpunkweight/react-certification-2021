import styled from 'styled-components';

const ModalBackground = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const XButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Input = styled.input`
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid black;
  line-height: 1.5em;
  padding: 5px;
`;

const LoginContainer = styled.div`
  height: 40%;
  width: 40%;
  float: right;
  margin-right: 50%;
  margin-left: 50%;
  margin-top: 10%;
  align-items: center;
  background-color: ${(props) =>
    props.theme.darkMode ? `rgb(0, 52, 85)` : `rgb(29, 106, 154, 1)`};
`;

const ErrorMessage = styled.p`
  color: red;
`;

const Styled = {
  ModalBackground,
  XButton,
  Input,
  LoginContainer,
  ErrorMessage,
};

export default Styled;
