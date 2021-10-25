import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorResponse({ message }) {
  return <h3>{message}</h3>;
}

Error.proTotypes = {
  message: PropTypes.string.isRequired,
};
