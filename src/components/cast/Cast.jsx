import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieCredits } from '../../services/api';

function Cast(props) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchMovieCredits() {
      const credits = await props.getMovieCredits(props.match.params.movieId);
      setCast(credits.cast);
    }
    fetchMovieCredits();
  }, [props]);

  return (
    <div>
      <h1>Актори</h1>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.profile_path && (
              <img src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} alt={actor.name} />
            )}
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Cast.propTypes = {
  getMovieCredits: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Cast;