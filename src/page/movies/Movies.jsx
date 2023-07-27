import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { searchMovies } from '../../services/api';
import "./Movies.scss"

function Movies() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const { results } = await searchMovies(query);
    setSearchResults(results);
  };

  return (
    <div className="container">
      <form onSubmit={handleSearch} className='movies-form'>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search movies"
          className='movies-input'
        />
        <button type="submit" className='movies-btn'>Search</button>
      </form>
      {searchResults.length > 0 && (
        <ul className='movies-list'>
          {searchResults.map((movie) => (
            <li key={movie.id} className='movies-item'>
              <Link to={`/movies/${movie.id}`}>
                <span className='movies-text'>{movie.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Movies.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Movies;