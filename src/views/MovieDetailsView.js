import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../services/api';

export default function MovieDetailsView() {
  const { moveId } = useParams();
  console.log(moveId);

  const [MovieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    api.fetchMovieDetails(moveId).then(setMovieDetails);
  }, [moveId]);

  console.log(moveId);

  return (
    <>
      {MovieDetails && (
        <>
          <img
            className="modal-card "
            src={`https://image.tmdb.org/t/p/w500${MovieDetails.poster_path}`}
            alt={MovieDetails.title}
          />
          <div className="wrapper">
            <h2 id="video-title-dt" className="modal-card__title">
              {MovieDetails.title}
            </h2>
            <ul className="modal-card__list">
              <li className="modal-card__item">
                <span className="item"> Votes </span>
                <span className="item-value">{MovieDetails.vote_average}</span>
              </li>
              <li className="modal-card__item">
                <span className="item"> Popularity </span>

                <span className="item-value">{MovieDetails.popularity}</span>
              </li>
              <li className="modal-card__item">
                <span className="item"> Original title </span>

                <span className="item-value">
                  {MovieDetails.original_title}
                </span>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
