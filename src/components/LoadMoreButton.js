import React from "react";
import PropTypes from "prop-types";
import Loading from '../components/Loading';
export default function LoadMoreButton(props) {
  return (
    <div className="post-container-footer m-15rem">
      {props.loading ? (
        <Loading/>
      ) : (
        <button className={`default-btn load-more-btn ${props.className}`} onClick={props.onClick}>
          {props.text}
        </button>
      )}
    </div>
  );
}

LoadMoreButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
  onClick:PropTypes.func
};
LoadMoreButton.defaultProps = {
  loading: false
};
