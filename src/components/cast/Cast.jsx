import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieCredits } from '../../services/api';
import { useParams, Outlet } from 'react-router-dom';

function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const creditsData = await getMovieCredits(movieId);
      setCast(creditsData.cast);
    }

    fetchData();
  }, [movieId]);

  return (
    <div>
      <h2>Актори</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Cast;