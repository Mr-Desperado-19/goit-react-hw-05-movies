import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTrendingMovies } from '../../services/api';
import "./Home.scss"

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
    <div className="container">
      <h1 className='title'>Trending today</h1>
      <ul className='home-list'>
        {trendingMovies.map((movie) => (
          <li key={movie.id} className='home-item'>
            <Link to={`/movies/${movie.id}`}>
              <span className='home-text'>{movie.title}</span>
            </Link>
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