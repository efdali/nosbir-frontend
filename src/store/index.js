import { createStore, applyMiddleware,compose } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import http from "../utils/http";

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument(http)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
