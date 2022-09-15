import React from "react";
import DrawerComp from "../Drawer/Drawer";
import "./NavBar.css"

const NavBar = ({ links }) => {
  return (
    <>
      <DrawerComp links={links}/>
      <div className="wrapper">
        <span className="header white">AROUND</span>
        <span className="header blue">FUTURE</span>
      </div>
      </>
  );
};

export default NavBar; 