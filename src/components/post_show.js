import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostShow extends Component {

  // React lifecycle method (only called once on the first render)
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  render() {

    const { post } = this.props;

    // Handle null post
    if(!post) {
      return ( <div> Loading... </div> );
    } else {
      return (
        <div>
          <h3> { post.title } </h3>
          <h6> Categories: { post.categories } </h6>
          <p> { post.content } </p>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostShow);
