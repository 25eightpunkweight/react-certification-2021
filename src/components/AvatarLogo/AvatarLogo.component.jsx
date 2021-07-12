import React, { useContext } from 'react';
import Styled from './AvatarLogo.styled';
import { AccountContext } from '../../contexts/AccountContextProvider';

function AvatarLogo() {
  const loggedInContext = useContext(AccountContext);

  const img = loggedInContext.account
    ? loggedInContext.account.avatarUrl
    : 'empty_avatar.png';

  return (
    <span>
      <Styled.AvatarImg src={img} />
    </span>
  );
}

export default AvatarLogo;
