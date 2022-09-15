import React from "react";
import DrawerComp from "../Drawer/Drawer";
import {AppBar, Toolbar} from "@mui/material";
import "./NavBar.css"

const NavBar = ({ links }) => {
  return (
    <AppBar sx={{ bgcolor: "transparent" }} elevation={0}>
      <Toolbar>
      <div className="wrapper">
        <span className="header white">AROUND</span>
        <span className="header blue">FUTURE</span>
      </div>
      <DrawerComp links={links}/>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar; 