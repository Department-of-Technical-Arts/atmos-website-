import { React, useState } from "react";
import "./talks.css";
import { Swiper, SwiperSlide } from "swiper/react";
import placeholder from "../../images/competions/pawel-nolbert-62OK9xwVA0c-unsplash 1.png";
import Slider from "../slider/Slider";

import "../slider/slider.css";

const Talks = () => {
  const [swiper, setSwiper] = useState(null);
  const [swiper2, setSwiper2] = useState(null);

  const talksNames = ["Nidhi Narwal","Kiran Bedi","Bharat Karnad","Waria Hussain","Dr V Anantha Nageswaran"]

  return (
    <>
      <div className="background-container-talks">
        <div className="background-talks">
          <div className="image-talks"></div>
          <div className="content-talks">
            <h1>TALKS</h1>
          </div>
          <h3 className="subHeader1">PREVIOUS</h3>
          <button className='swiperButtonPrevPrev' onClick={() => {
            console.log("prev");
            swiper.slidePrev()
            }}></button>

          <div className='card1-container'>
            <Slider data={talksNames} time="prev" type="talk" swiper={swiper} setSwiper={setSwiper}/>
          </div>
          <button className='swiperButtonPrevNext' onClick={() => swiper.slideNext()}></button>
          


          <h3 className="subHeader2">CURRENT</h3>
          <button className='swiperButtonCurrPrev' onClick={() => {
            console.log("prev");
            swiper2.slidePrev()
            }}></button>
         
          <div className='card2-container' >
            <Slider data={talksNames} type="talk" swiper={swiper2} setSwiper={setSwiper2}/>
          </div>
          <button 
        className='swiperButtonCurrNext' onClick={() => swiper2.slideNext()}></button>
       
        </div>
      </div>
    </>
  );
};

export default Talks;
