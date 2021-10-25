import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

import * as api from '../../services/api';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    // console.log(movieId);
    api.fetchCast(movieId).then(setActors);
  }, [movieId]);

  if (actors.length < 1) {
    return <h3> Unfortunately, there is no information about the cast.</h3>;
  }

  return (
    <>
      <ul className={styles.list}>
        {actors.map(actor => {
          if (actors.indexOf(actor) > 5 || actor.profile_path === null) {
            return;
          }

          return (
            <li className={styles.item} key={actor.id}>
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
