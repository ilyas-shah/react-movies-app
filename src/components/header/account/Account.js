import React, { useState } from "react";
import { Menu, MenuItem } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

import "../../../styles/header/account.scss";

const Account = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="account">
      <PersonIcon variant="outlined" onClick={handleClick}>
        {/* {!anchorEl && <ArrowDropDownIcon onClick={handleClick} />} */}
        {/* {anchorEl && <ArrowDropUpIcon onClick={handleClick} />} */}
      </PersonIcon>
      {!anchorEl && <ArrowDropDownIcon />}

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Account;
