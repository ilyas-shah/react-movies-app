import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <NavLink to="/" className="logo">
        {/* <img src="./logo192.png" alt="logo" /> */}
        <strong>MOVIE FLIX</strong>
      </NavLink>
    </>
  );
};

export default Logo;
