import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import MovieList from '../../components/MovieList/MovieList';
import css from './MoviesPage.module.css';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryFromURL = searchParams.get('query') || '';

  useEffect(() => {
    if (queryFromURL) {
      searchMovies(queryFromURL)
        .then(setMovies)
        .catch(error => console.error(error));
    }
  }, [queryFromURL]);

  const handleSearch = e => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();

    if (query) {
      setSearchParams({ query });
    }
    e.target.reset();
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSearch}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default MoviesPage;
