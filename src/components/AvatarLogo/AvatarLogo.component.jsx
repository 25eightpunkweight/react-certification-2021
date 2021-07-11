import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import { AppearanceContext } from '../../contexts/AppearanceContextProvider';
import { AccountContext } from '../../contexts/AccountContextProvider';

const AvatarImg = styled.img`
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  /* background: url(${(props) => props.src}); */
  /* background-image: url('../../../public/empty_avatar.png');
  background-position: 50% 50%;
  background-size: cover; */
  border-radius: 50%;
`;

function AvatarLogo(props) {
  const darkModeContext = useContext(AppearanceContext);
  const loggedInContext = useContext(AccountContext);

  const img = loggedInContext.account
    ? loggedInContext.account.avatarUrl
    : 'empty_avatar.png';

  return (
    <span>
      <AvatarImg src={img} />
    </span>
  );
  // return <img src="../../../public/empty_avatar.png" alt="" />;
}

export default AvatarLogo;
