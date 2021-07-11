import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { SearchContext } from '../../contexts/SearchContextProvider';
import { AppearanceContext } from '../../contexts/AppearanceContextProvider';
import { AccountContext } from '../../contexts/AccountContextProvider';
import AvatarLogo from '../AvatarLogo';
import ToggleButton from '../ToggleButton'
import { storage } from '../../utils/storage';

const LinkButtonLeft = styled(Link)`
  left: 0%;
  float: left;
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
  height: 5em;
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
  border: 0;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  outline: 0;
  font-size: 40px;
`;

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
    <HeaderWrap theme={{ darkMode: darkModeContext.darkMode }}>
      <LinkButtonLeft
        data-testid="go-to-home"
        to={{
          pathname: '/',
        }}
      >
        Home
      </LinkButtonLeft>
      <FormWrapper data-testid="search-input">
        <form onSubmit={handleInput}>
          <SearchField type="text" onChange={(e) => setSearchQuery(e.target.value)} />
        </form>
      </FormWrapper>
      <DarkModeToggleButton onChange={(e) => handleToggle(e.target.value)} />
      <DropDownMenuContainer ref={container} data-testid="header-account-dropdown">
        <DropDownMenuButton type="button" onClick={handleMenuOpen}>
          <AvatarLogo />
        </DropDownMenuButton>
        {open && (
          <DropDownMenu>
            <StyledUL>
              {!isLoggedIn && (
                <StyledLI>
                  <Link
                    to={{
                      pathname: '/login',
                    }}
                  >
                    Login
                  </Link>
                </StyledLI>
              )}
              {isLoggedIn && (
                <StyledLI>
                  <Link
                    to={{
                      pathname: '/favorites',
                    }}
                    onclick={handleMenuOpen}
                  >
                    Favorites
                  </Link>
                </StyledLI>
              )}
              {isLoggedIn && (
                <StyledLI>
                  <Link
                    to={{
                      pathname: '/',
                    }}
                    onClick={logMeOut}
                  >
                    Logout
                  </Link>
                </StyledLI>
              )}
            </StyledUL>
          </DropDownMenu>
        )}
      </DropDownMenuContainer>
    </HeaderWrap>
  );
}

export default Header;
