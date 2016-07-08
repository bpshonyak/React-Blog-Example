import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostNew from './components/post_new';

export default (
  <Route path="/" component={App}>
    // PostsIndex compenent available to App compenent on '/' path
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostNew} />
  </Route>
)
