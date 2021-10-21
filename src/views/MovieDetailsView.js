import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../services/api';

import styles from '../components/MovieDetailsPage/MovieDetailsPage.module.css';
import Cast from '../components/Cast/Cast';

export default function MovieDetailsView() {
  const params = useParams();
  console.log(params.movieId);
  const { movieId } = useParams();
  console.log(movieId);

  const [MovieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    api.fetchMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  console.log(movieId);

  return (
    <>
      {MovieDetails && (
        <>
          <div className={styles.container}>
            <img
              className={styles.modal_card}
              src={`https://image.tmdb.org/t/p/w500${MovieDetails.poster_path}`}
              alt={MovieDetails.title}
            />
            <div className="wrapper">
              <h2 className={styles.title}>{MovieDetails.title}</h2>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <span className={styles.item}> rating:</span>
                  <span className={styles.item_value}>
                    {MovieDetails.vote_average}
                  </span>
                </li>
                <li className={styles.item}>
                  <span className={styles.item}> views: </span>
                  <span className={styles.item_value}>
                    {Math.round(MovieDetails.popularity)}
                  </span>
                </li>
              </ul>
              <p className={styles.overviev}>{MovieDetails.overview}</p>
              <Cast movieId={movieId} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
