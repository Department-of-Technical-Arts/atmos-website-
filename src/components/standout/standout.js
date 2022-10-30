import React from "react";
import "./Standout.css";
import EventSlider from "./EventSlider";

const Standout = () => {
  return (
    <div>
      <div className="standout-container">
        <div className="lec">
          <h1 className="standout-header">PRE-FEST</h1>
          <p className="standout-desc">
            <EventSlider type={"prefest"} />
          </p>
        </div>

        <div className="eve">
          <h1 className="standout-header">WORKSHOPS</h1>
          <p className="standout-desc">
            <EventSlider type={"work"} />
          </p>
        </div>

        <div className="talks">
          <h1 className="standout-header">TALKS</h1>
          <p className="standout-desc">
            <EventSlider type={"talk"} />
          </p>
        </div>

        <div className="comp">
          <h1 className="standout-header">COMPETITIONS</h1>
          <p className="standout-desc">
            <EventSlider type={"comp"} />
          </p>
        </div>
        <p className="scroll-bottom">SCROLL TO EXPLORE</p>
      </div>
    </div>
  );
}

export default Standout;
