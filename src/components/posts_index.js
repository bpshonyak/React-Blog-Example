import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';


class PostsIndex extends Component {

  // React lifecycle method (only called once on the first render)
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
