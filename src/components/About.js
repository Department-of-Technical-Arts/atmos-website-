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
              Since its inception in 2012, ATMOS, a yearly national-level techno-management festival run by the BITS Pilani, Hyderabad Campus (BHPC), has experienced tremendous growth in popularity. Year after year, we keep pushing our limits and striving for more.<br /><br />

              This festival, formally named as the Assimilation of Technically Motivated Souls but more commonly abbreviated as ATMOS, attempts to identify young people with technical and managerial talent.<br /><br />

              Through its interactive workshops, challenges, and quizzes, the festival is renowned for shedding
              light on modern technical trends as well as management and finance. Not only is ATMOS
              educational, but it's also enjoyable and amusing. Some of the best ATMOS events include the Tech-
              related workshops from every possible branch of science and management, Tech- related
              workshops, and competitions challenging some of the country's sharpest minds to prove their
              technical expertise. Moreover, adding to all this intellect, we have some amazing Pro shows and DJ Nights. The festival's interdisciplinarity, and the faculty's and students' active participation.<br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
