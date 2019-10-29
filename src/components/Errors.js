import React from "react";
import PropTypes from "prop-types";
export default function Errors(props) {
  const { errors } = props;
  
  if (errors.length <= 0) {
    return false;
  }
  return (
    <ul className="errors">
      {errors.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </ul>
  );
}
Errors.propTypes = {
  errors: PropTypes.array
};
