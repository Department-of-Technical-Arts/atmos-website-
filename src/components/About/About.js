import { React, useEffect } from "react";
import "./About.css";

const About = () => {

  useEffect(() => {
    document.title = "About ATMOS"
  }, []);

  return (
    <div>
      <div className="image-about"></div>
      <h1 className = "heading">ABOUT US</h1>
      <p className = "about-description">
        Since its inception in 2012, ATMOS, a yearly national-level techno-management festival run by the BITS Pilani, Hyderabad Campus (BPHC), has experienced tremendous growth in popularity.<br /><br />
        This festival, formally named as the Assimilation of Technically Motivated Souls but more commonly abbreviated as ATMOS, attempts to identify young people with technical and managerial talent. Some of the best ATMOS events include the Tech-
        related workshops from every possible branch of science and management, Tech- related
        workshops, and competitions challenging some of the country's sharpest minds to prove their
        technical expertise. <br /><br />
      </p>
    </div>
  );
}

export default About;