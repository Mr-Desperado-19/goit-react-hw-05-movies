// import { lazy, Suspense } from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Loading from "../loading";
// import SharedLayout from "../sharedLayout";

// const Home = lazy(() => import("../../page/home"));
// const Movies = lazy(() => import("../../page/movies"));
// const MovieDetails = lazy(() => import("../../page/movieDetails"));
// const Cast = lazy(() => import("../cast"));
// const Reviews = lazy(() => import("../reviews"));

// const App = () => {
//   return (
//     <div>
//       <Suspense fallback={<Loading />}>
//         <Routes>
//           <Route path="/" element={<SharedLayout />}>
//             <Route index element={<Home />} />
//             <Route path="movies" element={<Movies />} />
//             <Route path="movies/:movieId" element={<MovieDetails />}>
//               <Route path="cast" element={<Cast />} />
//               <Route path="reviews" element={<Reviews />} />
//             </Route>
//             <Route path="*" element={<Home />} />
//           </Route>
//         </Routes>
//       </Suspense>
//     </div>
//   );
// };

// export default App;

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../loading";
import SharedLayout from "../sharedLayout"; 

const Home = lazy(() => import("../../page/home"));
const Movies = lazy(() => import("../../page/movies"));
const MovieDetails = lazy(() => import("../../page/movieDetails"));
const Cast = lazy(() => import("../cast"));
const Reviews = lazy(() => import("../reviews"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<h1>404: Page not found</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;