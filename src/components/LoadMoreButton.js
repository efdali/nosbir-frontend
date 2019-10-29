import React from "react";
import PropTypes from 'prop-types';
export default function LoadMoreButton(props) {
  return (
    <div className="post-container-footer mt-2 mb-2">
      <span className="load-span">
        <span className="loader"></span>
      </span>
      <button className={`default-btn load-more-btn ${props.className}`}>
        {props.text}
      </button>
    </div>
  );
}

LoadMoreButton.propTypes={
    text:PropTypes.string,
    className:PropTypes.string
}