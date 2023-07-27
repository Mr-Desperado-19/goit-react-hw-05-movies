import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieCredits } from '../../services/api';
import { useParams, Outlet } from 'react-router-dom';
import "./Cast.scss"

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
    <div className="container">
      <ul className='cast-list'>
        {cast.map((actor) => (
          <li key={actor.id} className='cast-item'>
            <span className='cast-text'>{actor.name}</span>
          </li>
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