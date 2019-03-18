import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, handleOnClick}) {
  return ( 
    <button
      className={className}
      onClick={handleOnClick}>Fetch
    </button>
  )
}

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  handleOnClick: PropTypes.func,
}



