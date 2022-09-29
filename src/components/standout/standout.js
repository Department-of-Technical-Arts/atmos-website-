import React, { useLayoutEffect, useRef } from "react";
import "./standout.css";

function Standout() {
  return (
    <>
      <div className="standout-container">
        <div className="lec">
          <h1 className="standout-header">LECTURES</h1>
          <p className="standout-desc">
            Lorem Ipsum is simply dummy text of the printing and typsetting
            industry. Lorem Ipsum has been the industry's standard dummy test
            ever since the 1500's when
          </p>
        </div>

        <div className="eve">
          <h1 className="standout-header">WORKSHOPS</h1>
          <p className="standout-desc">
            Lorem Ipsum is simply dummy text of the printing and typsetting
            industry. Lorem Ipsum has been the industry's standard dummy test
            ever since the 1500's when
          </p>
        </div>

        <div className="talks">
          <h1 className="standout-header">TALKS</h1>
          <p className="standout-desc">
            Lorem Ipsum is simply dummy text of the printing and typsetting
            industry. Lorem Ipsum has been the industry's standard dummy test
            ever since the 1500's when
          </p>
        </div>

        <div className="comp">
          <h1 className="standout-header">COMPETITIONS</h1>
          <p className="standout-desc">
            Lorem Ipsum is simply dummy text of the printing and typsetting
            industry. Lorem Ipsum has been the industry's standard dummy test
            ever since the 1500's when
          </p>
        </div>
      </div>
    </>
  );
}

export default Standout;
