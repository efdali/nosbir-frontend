import React from "react";
import cookies from "next-cookies";
import jwt_decode from "jwt-decode";
import Router from "next/router";
import { authenticate, deauthenticate } from "../store/actions/authActions";
export const auth = async ctx => {
  const { token } = cookies(ctx);
  if (token) {
    const decode = jwt_decode(token);
    if (Date.now() < decode.exp * 1000) {
      ctx.store.dispatch(authenticate(decode.data));
    } else ctx.store.dispatch(deauthenticate());

    return true;
  } else return false;
};
export const withAuth = (WrappedComponent, require = false) => {
  const Wrapper = props => {
    React.useEffect(() => {
      if (props.redirect) Router.back();
    }, []);
    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async ctx => {
    const isLogged = await auth(ctx);
    const redirect = require && !isLogged;
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps, redirect };
  };

  return Wrapper;
};
