import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/" activeClassName="is-active">
        Home
      </NavLink>
      <NavLink to="/" activeClassName="is-active">
        Tv Shows
      </NavLink>
      <NavLink to="/" activeClassName="is-active">
        Movies
      </NavLink>
    </div>
  );
};

export default Navbar;
