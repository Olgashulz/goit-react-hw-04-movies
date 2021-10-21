import { useState, useEffect } from 'react';
import MoviesPage from '../components/MoviesPage';

export default function MoviesView() {
  const [film, setFilm] = useState([]);

  return <MoviesPage />;
}
