import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Styled from './LoginModal.styled';
import loginApi from '../../login.api';
import { AccountContext } from '../../contexts/AccountContextProvider';
import { storage } from '../../utils/storage';

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
    <Styled.ModalBackground data-testid="login-modal-background">
      <Styled.LoginContainer>
        <Styled.XButton onClick={goBack}>&times;</Styled.XButton>
        <h2>Welcome!</h2>
        <Styled.ErrorMessage>{hasError}</Styled.ErrorMessage>
        <form onSubmit={handleLogin}>
          <h3>Username</h3>
          <Styled.Input
            type="text"
            placeholder="username"
            onChange={(e) => setUser(e.target.value)}
          />
          <h3>Password</h3>
          <Styled.Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </Styled.LoginContainer>
    </Styled.ModalBackground>
  );
}

export default LoginModal;
