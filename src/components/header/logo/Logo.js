import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <NavLink to="/home">
        <div className="logo"></div>
      </NavLink>
    </>
  );
};

export default Logo;
