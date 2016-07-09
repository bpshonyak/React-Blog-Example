import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL= 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=p9ftukj087yfgc898oyikghc';

export function fetchPosts() {

  const REQUEST = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: REQUEST
  };
}

export function fetchPost(id) {

  const REQUEST = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: REQUEST
  };
}

export function createPost(props) {

  const REQUEST = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: REQUEST
  }
}

export function deletePost(id) {

  const REQUEST = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: REQUEST
  }
}
