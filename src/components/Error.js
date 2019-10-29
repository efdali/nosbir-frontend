import React from "react";
import PropTypes from "prop-types";
export default function Error(props) {
  const { error } = props;
  
  if (!error) {
    return false;
  }
  return (
    <ul className="errors">
        <li>{error}</li>
    </ul>
  );
}
Error.propTypes = {
  errors: PropTypes.string
};
