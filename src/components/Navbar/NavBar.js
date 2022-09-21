import React from "react";
import DrawerComp from "../Drawer/Drawer";
import {AppBar, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <AppBar sx={{ bgcolor: "transparent" }} elevation={0}>
      <Toolbar>
        <a href="/" className="wrapper">
          <span className="nav-heading white">AROUND</span>
          <span className="nav-heading blue">FUTURE</span>
        </a>
      <DrawerComp/>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar; 