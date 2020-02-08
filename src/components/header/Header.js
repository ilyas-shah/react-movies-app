import React from "react";
import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import Search from "./search/Search";
import Account from "./account/Account";

import "../../styles/header/header.scss";

const Header = () => {
  return (
    <header>
      <div className="nav-container">
        <Logo />
        <Navbar />
        <Search />
        <Account />
      </div>
    </header>
  );
};

export default Header;
