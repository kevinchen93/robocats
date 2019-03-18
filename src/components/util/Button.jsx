import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, onClick }) => {
  return ( 
    <button
      className={className}
      onClick={onClick}>Fetch
    </button>
  )
}

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  handleOnClick: PropTypes.func,
}



