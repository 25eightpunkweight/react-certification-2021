import styled from 'styled-components';

const LoginForm = styled.form`
  display: flex;
  padding: 1%;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0;
`;

const AltTitle = styled.h5`
  margin: 0;
`;

const LoginSubmit = styled.button`

`;

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
  margin-right: auto;
  font-size: 28px;
  font-weight: bold;
  height: 1%;
  position: absolute;
  top: 2px;
  right: 2px;

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
  text-align: center;
`;

const LoginContainer = styled.div`
  position: relative;
  height: 40%;
  width: 18em;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 15%;
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
  Title,
  AltTitle,
  LoginSubmit,
  LoginForm,
};

export default Styled;
