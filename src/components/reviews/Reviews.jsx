import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieReviews } from '../../services/api';

function Reviews(props) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const reviewsData = await getMovieReviews(props.movieId);
      setReviews(reviewsData.results);
    }

    fetchData();
  }, [props.movieId]);

  return (
    <div>
      <h2>Огляди</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;