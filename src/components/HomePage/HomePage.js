import { useState, useEffect } from 'react';
import FilmListMarkup from '../FilmListMarkup';
import ErrorResponse from '../ErrorResponse/ErrorResponse';
import Button from '../Button';
import * as api from '../../services/api';

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.fetchMoovies(page).then(res => {
      setFilms(prevState => [...prevState, ...res]);
    });
  }, [page]);

  const onLoadMore = event => {
    setPage(page + 1);
  };

  return (
    <>
      {films.length > 0 ? <FilmListMarkup films={films} /> : <ErrorResponse />}
      {films.length > 0 && <Button onLoadMore={onLoadMore} />}
    </>
  );
}
