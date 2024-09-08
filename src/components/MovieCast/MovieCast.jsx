import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast, getImageUrl } from '../../services/api';
import css from './MovieCast.module.css';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId)
      .then(setCast)
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <ul className={css.list}>
      {cast.map(actor => (
        <li key={actor.id} className={css.item}>
          <img
            className={css.castImage}
            src={getImageUrl(actor.profile_path)}
            alt={actor.name}
            width="170"
          />
          <p className={css.castName}>{actor.name}</p>
          <p className={css.castCharacter}>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
