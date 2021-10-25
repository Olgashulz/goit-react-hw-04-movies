import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css';

import * as api from '../../services/api';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    // console.log(movieId);
    api.fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  if (reviews.length < 1) {
    return <h3> Unfortunately, there are no reviews.</h3>;
  }

  return (
    <>
      <ul className={styles.list}>
        {reviews.map(review => {
          return (
            <li className={styles.item} key={review.id}>
              <h5 className={styles.title}>{review.author}</h5>
              <p className={styles.text}>{review.content}</p>
              <span className={styles.data}>
                {review.created_at.slice(0, 10)}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
