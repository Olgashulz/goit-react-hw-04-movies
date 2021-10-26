import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ onLoadMore }) {
  return (
    <button type="button" className={styles.button} onClick={onLoadMore}>
      Load more
    </button>
  );
}

Button.proTotypes = {
  onLoadMore: PropTypes.func.isRequired,
};
