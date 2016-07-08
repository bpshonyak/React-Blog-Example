import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";

const ROOT_URL= 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=sb39n2u49y3284sihadfg8232';

export function fetchPosts() {

  const REQUEST = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: REQUEST
  };
}

export function createPost(props) {

  const REQUEST = axios.get(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: REQUEST
  }
}
