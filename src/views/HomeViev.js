import { useState, useEffect } from 'react';
// import { Link, useRouteMatch } from "react-router-dom";

import PageHeading from '../components/PageHeading/PageHeading';
import HomePage from '../components/HomePage';
import * as api from '../services/api';

export default function HomeView() {
  // const { url } = useRouteMatch();
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.fetchMoovies(page).then(setFilms);
  }, [page]);

  console.log(films);

  return (
    <>
      <PageHeading text="Popular movies" />
      {films && <HomePage films={films} />}
    </>
  );
}
