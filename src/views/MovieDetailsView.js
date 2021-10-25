import { useState, useEffect } from 'react';
import { NavLink, Route, useRouteMatch, useParams } from 'react-router-dom';
import * as api from '../services/api';
import {} from 'react-router-dom';

import styles from '../components/MovieDetailsPage/MovieDetailsPage.module.css';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

export default function MovieDetailsView() {
  // const params = useParams();
  // console.log(params.movieId);
  const { movieId } = useParams();
  console.log(movieId);

  const [MovieDetails, setMovieDetails] = useState(null);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    api.fetchMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  // console.log(movieId);

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
            <div className={styles.wrapper}>
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

              <NavLink to={`${url}/cast`} className={styles.cast_title}>
                Cast
              </NavLink>
              <NavLink to={`${url}/reviews`} className={styles.cast_title}>
                Reviews
              </NavLink>

              <Route path={`${path}/cast`}>
                <Cast moveId={movieId} />
              </Route>
              <Route path={`${path}/reviews`}>
                <Reviews smoveId={movieId} />
              </Route>
            </div>
          </div>
        </>
      )}
    </>
  );
}
