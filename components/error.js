import React from 'react';

const Error = props => (
  <div className="error-container">
    <p>
      <img src="/single-error-icon.svg" alt="upps! crash" height="40" />
      {props.msg ? props.msg : 'Oppps..! Bir Hata Oluştu.'}
    </p>
  </div>
);

export default Error;
