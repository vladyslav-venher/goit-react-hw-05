import {
  useParams,
  NavLink,
  Outlet,
  Link,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect, Suspense, useRef } from 'react';
import { getMovieDetails, getImageUrl } from '../../services/api';
import css from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <div className={css.details}>
      <Link className={css.link} to={backLinkRef.current}>
        Go back
      </Link>
      {movie && (
        <div className={css.moviePart}>
          <img
            src={getImageUrl(movie.poster_path)}
            alt={movie.title}
            width={300}
          />
          <div className={css.movieInfo}>
            <h1 className={css.title}>{movie.title}</h1>

            <h2 className={css.title}>Overview</h2>
            <p className={css.text}>{movie.overview}</p>

            <h2 className={css.title}>Genres</h2>
            <p className={css.text}>
              {movie.genres.map(genre => genre.name).join(', ')}
            </p>
          </div>

          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetailsPage;
