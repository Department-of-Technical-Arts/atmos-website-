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
            <h1 class = "heading">ABOUT US</h1>
            <p class = "about-description">
              Since its inception in 2012, ATMOS, a yearly national-level techno-management festival run by the BITS Pilani, Hyderabad Campus (BHPC), has experienced tremendous growth in popularity.<br /><br />

              This festival, formally named as the Assimilation of Technically Motivated Souls but more commonly abbreviated as ATMOS, attempts to identify young people with technical and managerial talent. Some of the best ATMOS events include the Tech-
              related workshops from every possible branch of science and management, Tech- related
              workshops, and competitions challenging some of the country's sharpest minds to prove their
              technical expertise. <br /><br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
