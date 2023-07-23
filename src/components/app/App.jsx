import { Routes, Route, Link } from "react-router-dom";
import Home from '../../page/home';
import Movies from '../../page/movies';
import MovieDetails from '../../page/movieDetails';
import Cast from "../cast";
import Reviews from "../reviews";
import { getMovieDetails, getMovieCredits, getMovieReviews, getTrendingMovies, searchMovies } from '../../services/api';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/movieDetails">MovieDetails</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default App;