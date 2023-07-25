import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

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
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;