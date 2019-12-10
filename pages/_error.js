import React from "react";
import { default as ErrorComponent } from "../components/error";
function Error({ statusCode }) {
  return (
    <ErrorComponent
      msg={
        statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"
      }
    />
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
