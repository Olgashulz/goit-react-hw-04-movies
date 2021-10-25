import { useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch, useParams } from 'react-router-dom';
import styles from './Cast.module.css';

import * as api from '../../services/api';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    console.log(movieId);
    api.fetchCast(movieId).then(setActors);
  }, [movieId]);

  return (
    <>
      <ul className={styles.list}>
        {actors.map(actor => {
          if (actors.indexOf(actor) > 5 || actor.profile_path === null) {
            return;
          }

          return (
            <li className={styles.item}>
              <figure>
                <img
                  className="gallery__video"
                  src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                  alt={actor.original_name}
                />
                <figcaption>{actor.original_name}</figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </>
  );
}
