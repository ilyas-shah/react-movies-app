import React from "react";
import { NavLink } from "react-router-dom";
import '../../../styles/header/navbar.scss'

const Navbar = () => {
  return (
    <nav className='nav-wrapper'>
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
