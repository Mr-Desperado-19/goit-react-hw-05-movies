import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Loading from "../loading";
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../../services/api';

const Home = lazy(() => import("../../page/home"));
const Movies = lazy(() => import("../../page/movies"));
const MovieDetails = lazy(() => import("../../page/movieDetails"));
const Cast = lazy(() => import("../cast"));
const Reviews = lazy(() => import("../reviews"));

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/movieDetails">MovieDetails</Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails getMovieDetails={getMovieDetails} getMovieCredits={getMovieCredits} getMovieReviews={getMovieReviews} />} />
          <Route path="/movies/:movieId/cast" element={<Cast getMovieCredits={getMovieCredits} />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews getMovieReviews={getMovieReviews} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;