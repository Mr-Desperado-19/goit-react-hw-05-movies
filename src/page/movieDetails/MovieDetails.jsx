import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import "./MovieDetails.scss"

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
        <div className="container">
          <h1 className='title'>{movie.title}</h1>
          <p className='movie-text'>{movie.overview}</p>
          <img className='movie-img' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width="300" height="350" />

          <div>
            <h2 className='title'>Additional information</h2>
  
            <Link to="cast">
              <p className='additional-info_link'>Cast</p>
            </Link>
  
            <Link to="reviews">
              <p className='additional-info_link title-reviews'>Reviews</p>
            </Link>
          </div>

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