import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../Layout';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Video from '../../pages/Video';
import VideoLayout from '../VideoLayout';

function Body(props) {
  const { searchTerm } = props;

  return (
    <Switch>
      <Route exact path="/">
        <Layout>
          <HomePage search={searchTerm} />
        </Layout>
      </Route>
      <Route path="/video/:video_id">
        <VideoLayout>
          <Video />
        </VideoLayout>
      </Route>
      <Route exact path="*">
        <Layout>
          <NotFound />
        </Layout>
      </Route>
    </Switch>
  );
}

export default Body;
