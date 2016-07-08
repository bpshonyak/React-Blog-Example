import React, { Component } from 'react';

class PostsIndex extends Component {

  // React lifecycle method (only called once on the first render)
  componentWillMount() {
    console.log("component mount event!");
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

export default PostsIndex;
