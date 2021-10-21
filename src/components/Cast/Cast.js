import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

import * as api from '../../services/api';

export default function Cast(movieId) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    api.fetchCast(movieId).then(setActors);
  }, [movieId]);

  return (
    <>
      <h4>Actors</h4>
    </>
  );
}
