import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <NavLink to="/">
        {/* <img src="./logo192.png" alt="logo" /> */}
        <strong>GET FLIX</strong>
      </NavLink>
    </>
  );
};

export default Logo;
