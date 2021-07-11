import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import loginApi from '../../login.api';

import { AccountContext } from '../../contexts/AccountContextProvider';
import { storage } from '../../utils/storage';

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

function LoginModal(props) {
  const loginContext = useContext(AccountContext);

  const history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState('');

  const goBack = (event) => {
    event.stopPropagation();
    history.goBack();
  };

  const store = storage;

  const handleLogin = () => {
    loginApi(user, password)
      .then((res) => {
        store.set('account', res);
        loginContext.accountChange({ avatarUrl: res.avatarUrl });
        setHasError('');
        history.goBack();
      })
      .catch((error) => {
        console.error(error);
        setHasError('invalid login');
      });
  };

  return (
    <ModalBackground data-testid="login-modal-background">
      <LoginContainer>
        <XButton onClick={goBack}>&times;</XButton>
        <h2>Welcome!</h2>
        <ErrorMessage>{hasError}</ErrorMessage>
        <form onSubmit={handleLogin}>
          <h3>Username</h3>
          <Input
            type="text"
            placeholder="username"
            onChange={(e) => setUser(e.target.value)}
          />
          <h3>Password</h3>
          <Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </LoginContainer>
    </ModalBackground>
  );
}

export default LoginModal;
