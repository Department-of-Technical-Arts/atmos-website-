import React from "react";

import Imagegrid from "./imagegridSpons";
import "./spons.css";

function Sponsors() {
  return (
    <>
      <>
        <div>
          <div >
            <div className="image-gallery-spons"></div>
            <div className="content-gallery-spons">
              <h1 className="oursponsors-title">OUR PREVIOUS SPONSORS</h1>
              <h1 className="sponsors-title">Title Sponsor</h1>
              <h1 className="cotitle-sponsors">Co-Title Sponsors</h1>
              <h1 className="associate-sponsors">Associate Sponsors</h1>
              <h1 className="gold-sponsors">Gold Sponsors</h1>
              <h1 className="silver-sponsors">Silver Sponsors</h1>
            </div>
            <Imagegrid />
          </div>
        </div>
      </>
    </>
  );
}

export default Sponsors;
