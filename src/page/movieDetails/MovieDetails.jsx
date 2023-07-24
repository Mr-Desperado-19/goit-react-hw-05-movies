import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../../services/api';
import Cast from '../../components/cast';
import Reviews from '../../components/reviews';

function MovieDetails(props) {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const movieData = await getMovieDetails(props.match.params.movieId);
      setMovie(movieData);

      const creditsData = await getMovieCredits(props.match.params.movieId);
      setCast(creditsData.cast);

      const reviewsData = await getMovieReviews(props.match.params.movieId);
      setReviews(reviewsData.results);
    }

    fetchData();
  }, [props]);

  if (!movie) {
    return null;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

      <Cast cast={cast} />
      <Reviews reviews={reviews} />
    </div>
  );
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;