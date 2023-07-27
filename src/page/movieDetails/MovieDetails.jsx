import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const movieData = await getMovieDetails(movieId);
      setMovie(movieData);
    }

    fetchData();
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

          <Link to="cast">
            <p>cast</p>
          </Link>

          <Link to="reviews">
            <p>reviews</p>
          </Link>

          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
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