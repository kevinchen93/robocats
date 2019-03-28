import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, value, className, onChange, placeholder }) => {
  return (
    <input 
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input;

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}