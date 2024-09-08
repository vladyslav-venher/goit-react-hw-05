import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../services/api';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(setReviews)
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <ul>
      {reviews.length ? (
        reviews.map(review => (
          <li key={review.id}>
            <p>
              <strong>{review.author}</strong>: {review.content}
            </p>
          </li>
        ))
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </ul>
  );
}

export default MovieReviews;
