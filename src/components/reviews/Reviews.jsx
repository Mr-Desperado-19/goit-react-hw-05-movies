import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieReviews } from '../../services/api';

function Reviews(props) {
  const { getMovieReviews } = props;
  const movieId = props.match.params.movieId;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchMovieReviews() {
      const reviewsData = await getMovieReviews(movieId);
      setReviews(reviewsData.results);
    }
    fetchMovieReviews();
  }, [getMovieReviews, movieId]);

  return (
    <div>
      <h1>Огляди</h1>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Огляди для цього фільму відсутні.</p>
      )}
    </div>
  );
}

Reviews.propTypes = {
  getMovieReviews: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Reviews;