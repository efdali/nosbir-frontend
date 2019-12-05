import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import GroupReducer from './groupReducer';
import PostReducer from './postReducer';
import PopularReducer from './popularReducer';
import ModalReducer from './modalReducer';
import CommentReducer from './commentReducer';
export default combineReducers({
  auth: AuthReducer,
  groups: GroupReducer,
  posts:PostReducer,
  populars:PopularReducer,
  modal:ModalReducer,
  comments:CommentReducer,
});
