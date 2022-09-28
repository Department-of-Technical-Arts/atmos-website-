import { React, useState } from "react";
import "./workshops.css";
import placeholder from "../../images/competions/pawel-nolbert-62OK9xwVA0c-unsplash 1.png";
import Slider from "../slider/Slider";
import Slider2 from "../slider/Slidercomcurr";
import "../slider/slider.css";

const Workshops = () => {
  const [swiper, setSwiper] = useState(null);
  const [swiper2, setSwiper2] = useState(null);
  return (
    <>
      <div className="background-container-workshops">
        <div className="background-workshops">
          <div className="image-workshops"></div>
          <div className="content-workshops">
            <h1>WORKSHOPS</h1>
          </div>
          <h3 className="subHeader1">PREVIOUS</h3>
          <h3 className="subHeader2">CURRENT</h3>
          <button
            className="swiperButtonPrev"
            onClick={() => {
              console.log("prev");
              swiper.slidePrev();
            }}
          ></button>

          <div className="card1-container">
            <Slider swiper={swiper} setSwiper={setSwiper} />
          </div>
          <button
            className="swiperButtonNext"
            onClick={() => swiper.slideNext()}
          ></button>

          <button
            className="swiperButtonPrev leftarrow"
            onClick={() => {
              console.log("prev");
              swiper2.slidePrev();
            }}
          ></button>
          <div className="card2-container">
            <Slider swiper={swiper2} setSwiper={setSwiper2} />
          </div>
          <button
            className="swiperButtonNext rightarrow"
            onClick={() => swiper2.slideNext()}
          ></button>
        </div>
      </div>
    </>
  );
};

export default Workshops;
