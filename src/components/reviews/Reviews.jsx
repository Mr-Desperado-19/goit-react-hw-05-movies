import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieReviews } from '../../services/api';
import { useParams, Outlet } from 'react-router-dom';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const reviewsData = await getMovieReviews(movieId);
      setReviews(reviewsData.results);
    }

    fetchData();
  }, [movieId]);

  return (
    <div>
      <h2>Відгуки</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.content}</p>
            <p>Автор: {review.author}</p>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;