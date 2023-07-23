import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieDetails } from '../../services/api';

function MovieDetails(props) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      const movie = await props.getMovieDetails(props.match.params.movieId);
      setMovie(movie);
    }
    fetchMovieDetails();
  }, [props]);

  if (!movie) {
    return null;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    </div>
  );
}

MovieDetails.propTypes = {
  getMovieDetails: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;