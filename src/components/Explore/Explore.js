import React, { useState } from "react";
import "./Explore.css";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const navigate = useNavigate();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleClick = async (e) => {
    isClicked(true);
    await delay(1000);
    navigate("/events");
  };

  const [click, isClicked] = useState(false);
  return (
    <div>
      {click ? (
        <div>
          <div className="background-container-explore1">
            <div className="bground-explore1">
              <div className="image1"></div>
              <div className="content-explore1">
                <h1 className="title-explore1 small-title">TO EXPLORE</h1>
                <h1 className="title-explore1 big-title">THE FUTURE</h1>
              </div>
              <div className="description-explore1">
                <h4 className="desc-explore1 white">
                  Unforgettable experience to the future for 3 days!
                </h4>
                <h4 className="desc-explore1 blue">
                  Future is closer than you think
                </h4>
                <button
                  className="explore-btn1"
                  onClick={() => {
                    isClicked(true);
                  }}
                >
                  EXPLORE <IoIosArrowForward className="ArrowForward" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="background-container-explore">
          <div className="image-explore"></div>
          <div className="bground-explore">
            <div className="content-explore">
              <h1 className="title-explore small-title">TO EXPLORE</h1>
              <h1 className="title-explore big-title">THE FUTURE</h1>
            </div>
            <div className="description-explore">
              <h4 className="desc-explore white">
                Unforgettable experience to the future for 3 days!
              </h4>
              <h4 className="desc-explore blue">
                Future is closer than you think
              </h4>
              <button className="explore-btn" onClick={handleClick}>
                EXPLORE <IoIosArrowForward className="ArrowForward" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Explore;
