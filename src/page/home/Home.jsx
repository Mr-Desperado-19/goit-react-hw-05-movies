import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { getTrendingMovies } from '../../services/api';

function Home(props) {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      const movies = await props.getTrendingMovies();
      setTrendingMovies(movies.results);
    }
    fetchTrendingMovies();
  }, [props]);

  return (
    <div>
      <h1>Популярні фільми</h1>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>
            <a href={`/movies/${movie.id}`}>{movie.title}</a>
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