import axios from 'axios';

const API_KEY = '2effa1a6e640356523df061b661f95f5';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWZmYTFhNmU2NDAzNTY1MjNkZjA2MWI2NjFmOTVmNSIsIm5iZiI6MTcyNTcxOTQ4NS40NjcyMzYsInN1YiI6IjY2ZDllNGY1NWM1YTZiMmQwNDlkNTFjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jnCEKF4JpcKG_fdkgWoHgzyIZczGpvP5fdEk6jDy0o0`,
  },
});

export const getTrendingMovies = async () => {
  const response = await api.get('/trending/movie/day');
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await api.get(`/search/movie`, {
    params: { query },
  });
  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
};

export const getMovieCast = async movieId => {
  const response = await api.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await api.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};

export const getImageUrl = path => `${IMAGE_BASE_URL}${path}`;
