import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" exact={true} activeClassName="is-active">
        Home
      </NavLink>
      <NavLink to="/tv" activeClassName="is-active">
        Tv Shows
      </NavLink>
      <NavLink to="/movies" activeClassName="is-active">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navbar;
