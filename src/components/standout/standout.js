import React from "react";
import "./Standout.css";
import EventSlider from "./EventSlider";
import { useSelector } from "react-redux";

const Standout = () => {
  const {competitions, workshops} = useSelector ((state) => state.displayData)
  return (
    <div>
      <div className="standout-container">
        <div className="lec">
          <h1 className="standout-header">PRE-FEST</h1>
          <div className="standout-desc">
            <EventSlider type={"prefest"} data={[]} />
          </div>
        </div>

        <div className="eve">
          <h1 className="standout-header">WORKSHOPS</h1>
          <div className="standout-desc">
            <EventSlider type="workshop" data={workshops} />
          </div>
        </div>

        <div className="talks">
          <h1 className="standout-header">TALKS</h1>
          <div className="standout-desc">
            <EventSlider type={"talk"} data={[]} />
          </div>
        </div>

        <div className="comp">
          <h1 className="standout-header">COMPETITIONS</h1>
          <div className="standout-desc">
            <EventSlider type="competition" data={competitions} />
          </div>
        </div>
        <div className="scroll-bottom">SCROLL TO EXPLORE</div>
      </div>
    </div>
  );
}

export default Standout;
