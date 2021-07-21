import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Layout from '../Layout';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Video from '../../pages/Video';
import VideoLayout from '../VideoLayout';
import LoginModal from '../LoginModal';
import FavoritesPage from '../../pages/Favorites';
import FavoriteVideo from '../../pages/FavoriteVideo';
import Private from '../Private';

const BodyWrapperSwitch = styled(Switch)`
  position: fixed;
`;

function Body() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <BodyWrapperSwitch location={background || location}>
        <Route exact path="/">
          <Layout>
            <HomePage />
          </Layout>
        </Route>
        <Route path="/login" component={LoginModal} />
        <Route path="/video/:video_id">
          <VideoLayout>
            <Video />
          </VideoLayout>
        </Route>
        <Route
          path="/favorites"
          render={({ match }) => {
            return (
              <>
                <Private exact path={`${match.url}/`}>
                  <Layout>
                    <FavoritesPage />
                  </Layout>
                </Private>
                <Private exact path={`${match.url}/:videoId`}>
                  <VideoLayout>
                    <FavoriteVideo />
                  </VideoLayout>
                </Private>
              </>
            );
          }}
        />
        <Route exact path="*">
          <Layout>
            <NotFound />
          </Layout>
        </Route>
      </BodyWrapperSwitch>
      {background && <Route path="/login" component={LoginModal} />}
    </>
  );
}

export default Body;
