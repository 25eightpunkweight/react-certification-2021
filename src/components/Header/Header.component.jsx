import React, { useContext, useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContextProvider';
import { AppearanceContext } from '../../contexts/AppearanceContextProvider';
import { AccountContext } from '../../contexts/AccountContextProvider';
import AvatarLogo from '../AvatarLogo';
import { storage } from '../../utils/storage';
import Styled from './Header.styled';

function Header() {
  const history = useHistory();
  const container = useRef();

  const darkModeContext = useContext(AppearanceContext);
  const searchContext = useContext(SearchContext);
  const loggedInContext = useContext(AccountContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(!open);
  };

  const handleInput = (event) => {
    event.preventDefault();
    searchContext.searchHandler(searchQuery);
    history.push('/');
  };

  const handleToggle = () => {
    darkModeContext.themeChangeHandler(!darkModeContext.darkMode);
  };

  const logMeOut = () => {
    if (storage.get('account')) {
      storage.set('account', null);
      window.localStorage.clear();
    }
    loggedInContext.accountChange(null);
    setOpen(!open);
  };

  const isLoggedIn = !!storage.get('account');

  useEffect(() => {
    function handleClickOutside(event) {
      if (container.current && !container.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [container]);

  return (
    <Styled.HeaderWrap theme={{ darkMode: darkModeContext.darkMode }}>
      <Styled.LinkButtonLeft
        data-testid="go-to-home"
        to={{
          pathname: '/',
        }}
      >
        Home
      </Styled.LinkButtonLeft>
      <Styled.FormWrapper data-testid="search-input">
        <form onSubmit={handleInput}>
          <Styled.SearchField
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </Styled.FormWrapper>
      <Styled.DarkModeToggleButton onChange={(e) => handleToggle(e.target.value)} />
      <Styled.DropDownMenuContainer ref={container} data-testid="header-account-dropdown">
        <Styled.DropDownMenuButton type="button" onClick={handleMenuOpen}>
          <AvatarLogo />
        </Styled.DropDownMenuButton>
        {open && (
          <Styled.DropDownMenu>
            <Styled.StyledUL>
              {!isLoggedIn && (
                <Styled.StyledLI>
                  <Styled.StyledLink
                    to={{
                      pathname: '/login',
                    }}
                    onClick={handleMenuOpen}
                  >
                    Login
                  </Styled.StyledLink>
                </Styled.StyledLI>
              )}
              {isLoggedIn && (
                <Styled.StyledLI>
                  <Styled.StyledLink
                    to={{
                      pathname: '/favorites',
                    }}
                    onClick={handleMenuOpen}
                  >
                    Favorites
                  </Styled.StyledLink>
                </Styled.StyledLI>
              )}
              {isLoggedIn && (
                <Styled.StyledLI>
                  <Styled.StyledLink
                    to={{
                      pathname: '/',
                    }}
                    onClick={logMeOut}
                  >
                    Logout
                  </Styled.StyledLink>
                </Styled.StyledLI>
              )}
            </Styled.StyledUL>
          </Styled.DropDownMenu>
        )}
      </Styled.DropDownMenuContainer>
    </Styled.HeaderWrap>
  );
}

export default Header;
