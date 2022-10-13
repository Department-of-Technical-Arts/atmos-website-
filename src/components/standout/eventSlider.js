import React, { useState, useEffect } from "react";
import "./eventSlider.css";
import competionsImages from "../../images/events-photos/competions-images";
import talksImages from "../../images/events-photos/talks-images";
import talksImages1 from "../../images/events-photos/talks-images1";
import proshowsImages from "../../images/events-photos/proshows-images";
import workshopsImages from "../../images/events-photos/workshops-images";
import { useNavigate } from "react-router-dom";

export default function EventSlider({ type }) {
  const [images, setImage] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (type == "comp") {
      setImage(competionsImages);
    } else if (type == "talk") {
      setImage(talksImages);
    } else if (type == "proshow") {
      setImage(talksImages1);
    } else if (type == "work") {
      setImage(workshopsImages);
    }
  }, []);

  function imageClicked() {
    if (type == "comp") {
      navigate("/competitions");
    } else if (type == "talk") {
      navigate("/talks");
    } else if (type == "proshow") {
      navigate("/talks");
    } else if (type == "work") {
      navigate("/workshops");
    }
  }

  return (
    <div class="image-slider">
      <div class="image-slider-track">
        {Object.values(images).map((value, i) => {
          return (
            <div class="slide-standout" onClick={imageClicked}>
              <img src={`${images[i]}`} />
            </div>
          );
        })}
        {/* <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>

        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>

        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>

        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div> */}
      </div>
    </div>
  );
}
