import React from "react";
import PropTypes from 'prop-types';
export default function FormInput(props) {
  return (
    <div className="input-container">
      <label className="input-label">
        {props.name}
        <span className="required">*</span>
        <div className="input-wrapper">
          <i className={`fas fa-${props.icon}`}></i>
          {
            props.children ? props.children :
          <input className='default-input' type={props.type} value={props.value} onChange={props.onChange} required/>
          }
        </div>
      </label>
    </div>
  );
}
FormInput.prototype={
    name:PropTypes.string.isRequired,
    icon:PropTypes.string,
    type:PropTypes.string,
    value:PropTypes.string,
    onChange:PropTypes.func
}
FormInput.defaultProps={
  type:"text",
  icon:"lock",
  value:""
}