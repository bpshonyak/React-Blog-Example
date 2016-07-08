import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

export default (
  <Route path="/" component={App}>
    // PostsIndex compenent available to App compenent on '/' path
    <IndexRoute component={PostsIndex} />
  </Route>
)
