import { useState } from 'react';
// import PropTypes from 'prop-types';

// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import * as api from '../../services/api';

import FilmListMarkup from '../FilmListMarkup';

export default function Searchbar() {
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [SerchFilm, setSerchFilm] = useState([]);

  const handleInputValueChange = event => {
    setInputValue(event.currentTarget.value.toLowerCase());
  };

  const handleOnSubmit = event => {
    event.preventDefault();

    // if (inputValue.trim() === '') {
    //     return toast.error('Please enter keyword.');
    // }

    api.fetchFindMovie(inputValue, page).then(setSerchFilm);
  };

  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={handleOnSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            value={inputValue}
            onChange={handleInputValueChange}
            placeholder="Search film"
          />
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </header>
      {SerchFilm && <FilmListMarkup films={SerchFilm} />}
    </>
  );
}

// Searchbar.proTotypes = {
//     onSubmit: PropTypes.func.isRequired,
//     removeImages: PropTypes.func.isRequired,
//     resetState: PropTypes.func,
// };
