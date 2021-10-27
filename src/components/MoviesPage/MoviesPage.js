import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as api from '../../services/api';

import FilmListMarkup from '../FilmListMarkup';
import styles from './MoviesPage.module.css';

export default function MoviesPage() {
  const [inputValue, setInputValue] = useState('');
  const [SerchFilm, setSerchFilm] = useState([]);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.search !== '') {
      api.fetchFindMovie(location.search.split('=')[1]).then(setSerchFilm);
      setInputValue(location.search.split('=')[1]);
    }
  }, [location]);

  const handleInputValueChange = event => {
    setInputValue(event.currentTarget.value.toLowerCase());
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      return toast.error('Please enter keyword.');
    }

    api.fetchFindMovie(inputValue).then(setSerchFilm);

    history.push({
      ...location,
      search: `query=${inputValue}`,
    });
  };

  return (
    <>
      <div className={styles.searchBar}>
        <form className={styles.searchForm} onSubmit={handleOnSubmit}>
          <input
            className={styles.searchForm_input}
            type="text"
            value={inputValue}
            onChange={handleInputValueChange}
            placeholder="Movie title"
          />
          <button type="submit" className={styles.button}>
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </div>
      {SerchFilm && (
        <FilmListMarkup films={SerchFilm} inputValue={inputValue} />
      )}
    </>
  );
}
