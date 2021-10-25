import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from './FilmListMarkup.module.css';

export default function FilmListMarkup({ films }) {
  return (
    <ul className={styles.list}>
      {films.map(film => {
        return (
          <li className={styles.item} key={film.id}>
            <Link to={`/movies/ ${film.id}`}>
              <div className={styles.card}>
                {film.poster_path ? (
                  <img
                    className="gallery__video"
                    src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                    alt={film.original_title}
                  />
                ) : (
                  <img
                    className="gallery__video"
                    src="https://bookslibs.info/assets/general/images/no_poster.jpg"
                    alt={film.original_title}
                  />
                )}
              </div>
              <div className={styles.card_info}>
                <h2 className={styles.card_title}>{film.original_title}</h2>
                <div className={styles.info_container}>
                  <span className={styles.card_details}>
                    release: {film.release_date}
                  </span>
                  <span className={styles.card_raiting}>
                    {film.vote_average}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

FilmListMarkup.proTotypes = {
  props: PropTypes.array.isRequired,
};
