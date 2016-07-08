import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";

const ROOT_URL= 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=sb39n2u49y3284sihadfg8232';

export function fetchPosts() {

  const REQUEST = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: REQUEST
  };
}
