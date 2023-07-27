import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieReviews } from '../../services/api';
import { useParams, Outlet } from 'react-router-dom';
import "./Reviews.scss"

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
    <div className="container">
      <ul className='reviews-list'>
        {reviews.map((review) => (
          <li key={review.id} className='reviews-item'>
            <p className='reviews-text'>{review.content}</p>
            <p className='reviews-text'>Author: {review.author}</p>
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