import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, className, placeholder }) => {
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