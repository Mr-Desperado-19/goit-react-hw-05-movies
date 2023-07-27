import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

const SharedLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/movies">
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