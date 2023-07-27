import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import "./SharedLayout.scss"

const SharedLayout = ({ children }) => {
  return (
    <div>
      <nav className="navigation">
        <NavLink to="/">
          <p className="navigation_text">Home</p>
        </NavLink>
        <NavLink to="/movies">
          <p className="navigation_text">Movies</p>
        </NavLink>
      </nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;