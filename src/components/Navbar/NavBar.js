import React, { useEffect, useState } from "react";
import DrawerComp from "../Drawer/Drawer";
import { AppBar, Toolbar, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavBar.css";
import mainLogo from "../../images/Asset2.png";

const NavBar = () => {
  const isTablet = useMediaQuery("(max-width:480px)", "(max-height:1024px)");
  const isMobile = useMediaQuery("(max-width: 320px)", "(max-height: 480px)");
  let paddingTop;
  if (isTablet) {
    paddingTop = "4rem";
  } else {
    paddingTop = 0;
  }

  return (
    <div className="appbar">
      <AppBar className="appbar" sx={{ bgcolor: "transparent" }} elevation={0}>
        <Toolbar>
          <a href="/" className="wrapper">
            <img src={mainLogo} className="logoimg"></img>
          </a>
          <DrawerComp />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
