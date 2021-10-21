import { useState, useEffect } from 'react';
// import { Link, useRouteMatch } from "react-router-dom";

import HomePage from '../components/HomePage';
import * as api from '../services/api';

export default function HomeView() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.fetchMoovies(page).then(setFilms);
  }, [page]);

  return <>{films && <HomePage films={films} />}</>;
}
