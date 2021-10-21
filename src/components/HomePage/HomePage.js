import React from 'react';
import PropTypes from 'prop-types';
import FilmListMarkup from '../FilmListMarkup';

export default function HomePage(props) {
  const { films } = props;

  return <FilmListMarkup films={films} />;
}

HomePage.proTotypes = {
  props: PropTypes.array.isRequired,
};
