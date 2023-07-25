// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { getMovieCredits } from '../../services/api';

// function Cast(props) {
//   const [cast, setCast] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const creditsData = await getMovieCredits(props.movieId);
//       setCast(creditsData.cast);
//     }

//     fetchData();
//   }, [props.movieId]);

//   return (
//     <div>
//       <h2>Актори</h2>
//       <ul>
//         {cast.map((actor) => (
//           <li key={actor.id}>{actor.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// Cast.propTypes = {
//   movieId: PropTypes.string.isRequired,
// };

// export default Cast;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getMovieCredits } from '../../services/api';
import { Outlet } from 'react-router-dom';

function Cast(props) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const creditsData = await getMovieCredits(props.movieId);
      setCast(creditsData.cast);
    }

    fetchData();
  }, [props.movieId]);

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