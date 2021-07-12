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
        <div>
          <Styled.XButton onClick={goBack}>&times;</Styled.XButton>
        </div>
        <Styled.LoginForm onSubmit={handleLogin}>
          <Styled.Title>Welcome!</Styled.Title>
          <Styled.AltTitle>you may login here</Styled.AltTitle>
          <Styled.ErrorMessage>{hasError}</Styled.ErrorMessage>
          <Styled.Input
            type="text"
            placeholder="username"
            onChange={(e) => setUser(e.target.value)}
          />
          <Styled.Input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Styled.LoginSubmit type="button" onClick={handleLogin}>
            Login
          </Styled.LoginSubmit>
        </Styled.LoginForm>
      </Styled.LoginContainer>
    </Styled.ModalBackground>
  );
}

export default LoginModal;
