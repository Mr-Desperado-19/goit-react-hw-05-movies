import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { searchMovies } from '../../services/api';

function Movies(props) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    const results = await props.searchMovies(query);
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Пошук фільмів</h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
        <button type="submit">Пошук</button>
      </form>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((movie) => (
            <li key={movie.id}>
              <a href={`/movies/${movie.id}`}>{movie.title}</a>
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