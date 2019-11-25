import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import GroupReducer from './groupReducer';
import PostReducer from './postReducer';
import PopularReducer from './popularReducer';
export default combineReducers({
  auth: AuthReducer,
  groups: GroupReducer,
  posts:PostReducer,
  populars:PopularReducer
});
