import { NavLink } from "react-router-dom";

const SharedLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/movies" activeClassName="active">
          Movies
        </NavLink>
      </nav>
      {children}
    </div>
  );
};

export default SharedLayout;