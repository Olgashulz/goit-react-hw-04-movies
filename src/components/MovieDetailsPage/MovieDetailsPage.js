import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';
import {
  NavLink,
  Route,
  useRouteMatch,
  useParams,
  useLocation,
  useHistory,
} from 'react-router-dom';
import * as api from '../../services/api';
import {} from 'react-router-dom';

import styles from '../MovieDetailsPage/MovieDetailsPage.module.css';
import Loader from '../Loader/Loader';

const Cast = lazy(() =>
  import('../Cast/Cast' /*webpackChungName: "Cast-block"*/),
);
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /*webpackChungName: "Reviews-block"*/),
);

export default function MovieDetailsView() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();

  // console.log(location.pathname);
  // console.log(location.state.from);
  // console.log(location.state.search);

  const [MovieDetails, setMovieDetails] = useState(null);
  const { path } = useRouteMatch();

  useEffect(() => {
    api.fetchMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  const handleGoBack = () => {
    // console.log(location.state.search)

    history.push(location?.state?.from ?? '/');

    if (location?.state?.from === '/movies') {
      history.push({
        pathname: location.state.from,
        search: `?query=${location.state.search}`,
      });
    }
  };

  return (
    <>
      <button
        className={styles.backBtn}
        type="button"
        onClick={handleGoBack}
      ></button>
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

              <NavLink
                to={{
                  pathname: `/movies/${movieId}/cast`,
                  state: {
                    from: location?.state?.from,
                    search: location.state.search,
                  },
                }}
                className={styles.cast_title}
              >
                Cast
              </NavLink>
              <NavLink
                to={{
                  pathname: `/movies/${movieId}/reviews`,
                  state: {
                    from: location?.state?.from,
                    search: location.state.search,
                  },
                }}
                className={styles.cast_title}
              >
                Reviews
              </NavLink>

              <Suspense fallback={<Loader />}>
                <Route path={`${path}/cast`}>
                  <Cast moveId={movieId} />
                </Route>
                <Route path={`${path}/reviews`}>
                  <Reviews smoveId={movieId} />
                </Route>
              </Suspense>
            </div>
          </div>
        </>
      )}
    </>
  );
}
