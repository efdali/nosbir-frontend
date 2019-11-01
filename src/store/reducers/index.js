import { combineReducers } from "redux";
import postReducer from "./postReducer";
import modalReducer from "./modalReducer";
import userReducer from "./userReducer";
import popularReducer from "./popularReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  postReducer,
  modalReducer,
  userReducer,
  popularReducer,
  profileReducer
});
