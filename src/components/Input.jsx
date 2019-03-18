import React from 'react';
import PropTypes from 'prop-types';

function Input({ className, type, placeholder }) {
  return (
    <input 
      className={className}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Input;

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}