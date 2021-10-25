import { useState, useEffect } from 'react';
import FilmListMarkup from '../FilmListMarkup';
import ErrorResponse from '../ErrorResponse/ErrorResponse';
import * as api from '../../services/api';

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.fetchMoovies(page).then(setFilms);
  }, [page]);

  return (
    <>
      {films.length > 0 ? <FilmListMarkup films={films} /> : <ErrorResponse />}
    </>
  );
}
