import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Store from "./store";
import { Provider } from "react-redux";
import { setAuthToken } from "./utils/http";
import jwt_decode from "jwt-decode";
import { loginUser, logout } from "./store/actions/userAction";

if (localStorage.token) {
  const decoded = jwt_decode(localStorage.token);
  const exp=decoded.exp;
  if(Date.now()<exp*1000){
    Store.dispatch(loginUser(decoded.data));
    setAuthToken(localStorage.token);
  }else{
    Store.dispatch(logout("Oturum Süresi Doldu.Tekrar Giriş Yapmanız gerekiyor."));
  }
  
}
ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
