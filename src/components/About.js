import React from "react";
import "../components/css/About.css";
import NavBar from "./Navbar/NavBar";

function About() {
  return (
    <>
      <div className="background-container-about">
        <div className="background-about">
          <div className="image-about"></div>
          <div className="content-about">
            <h1>ABOUT US</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
