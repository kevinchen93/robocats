import React from 'react';
import PropTypes from 'prop-types';

function Image({ src, alt }) {
  return ( 
    <img 
      src={src} 
      alt={alt} />
  )
}

export default Image;

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
}