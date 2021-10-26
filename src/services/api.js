const API_KEY = '8a933616dedc140a2710dab44d7240df';

export const fetchMoovies = async page => {
  const data = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject({
      error: new Error(
        `Sorry, the server is temporarily unavailable. Please try again later.`,
      ),
    });
  });
  return data.results;
};

export const fetchMovieDetails = async movieId => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject({
      error: new Error(
        `Sorry, the server is temporarily unavailable. Please try again later.`,
      ),
    });
  });
  return data;
};

export const fetchFindMovie = async key => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${key}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject({
      error: new Error(`Your request ${key}} did not return any results`),
    });
  });
  return data.results;
};

export const fetchCast = async movieId => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject({
      error: new Error(`This information is not available`),
    });
  });
  return data.cast;
};

export const fetchReviews = async movieId => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject({
      error: new Error(`This information is not available`),
    });
  });
  return data.results;
};
