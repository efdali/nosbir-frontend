import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import GroupReducer from './groupReducer';
import PostsReducer from './postsReducer';
export default combineReducers({
  auth: AuthReducer,
  groups: GroupReducer,
  posts:PostsReducer
});
