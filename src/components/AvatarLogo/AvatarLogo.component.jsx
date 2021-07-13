import React, { useContext } from 'react';
import Styled from './AvatarLogo.styled';
import { AccountContext } from '../../contexts/AccountContextProvider';
import {storage} from '../../utils/storage';

function AvatarLogo() {
  const store = storage;
  const getAccountAvatar = () => {
    if (store.get('account')) {
      return store.get('account').avatarUrl;
    }
    return null;
  };

  const img = getAccountAvatar() ? getAccountAvatar() : 'empty_avatar.png';

  return (
    <span>
      <Styled.AvatarImg src={img} />
    </span>
  );
}

export default AvatarLogo;
