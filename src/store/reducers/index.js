import { combineReducers} from 'redux';
import postReducer from './postReducer';
import modalReducer from './modalReducer';
import userReducer from './userReducer';

export default combineReducers({
    postReducer,
    modalReducer,
    userReducer
})
