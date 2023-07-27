import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTrendingMovies } from '../../services/api';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies.results);
    }
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Популярні фільми</h1>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Home.propTypes = {
  getTrendingMovies: PropTypes.func.isRequired,
};

export default Home;