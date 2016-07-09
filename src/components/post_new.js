import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from '../actions/index';

class PostNew extends Component {

  render() {

    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${ title.touched && title.invalid ? 'has-danger' : ''}`} >
          <label>Title</label>
          <input type='text' className='form-control' {...title} />
          <div className='text-danger'>
            { title.touched ? title.error : '' }
          </div>
        </div>

        <div className={`form-group ${ categories.touched && categories.invalid ? 'has-danger' : ''}`} >
          <label>Categories</label>
          <input type='text' className='form-control' {...categories} />
          <div className='text-danger'>
            { categories.touched ? categories.error : '' }
          </div>
        </div>

        <div className={`form-group ${ content.touched && content.invalid ? 'has-danger' : ''}`} >
          <label>Content</label>
          <textarea className='form-control' {...content} />
          <div className='text-danger'>
            { content.touched ? content.error : '' }
          </div>
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
        <Link to='/' className='btn btn-warning'>Cancle</Link>

      </form>
    );
  }
}

// handle form validation
function validate(values) {
    const errors = {};

    if (!values.title) {
      errors.title = 'Enter a Title for your post.';
    }

    if (!values.categories) {
      errors.categories = 'Enter some Categories for your post.';
    }

    if (!values.content) {
      errors.content = 'Enter some Content for your post.';
    }

    return errors;
}

// reduxForm is used in place of connect and has one additional arg... the form config obj
export default reduxForm({
  form: 'PostNew',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost } )(PostNew);
