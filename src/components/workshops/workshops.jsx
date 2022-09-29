import { React, useState } from "react";
import "./workshops.css";
import placeholder from "../../images/competions/pawel-nolbert-62OK9xwVA0c-unsplash 1.png";
import Slider from "../slider/Slider";
import "../slider/slider.css";

const Workshops = () => {
  const [swiper, setSwiper] = useState(null);
  const [swiper2, setSwiper2] = useState(null);


  //THE WORKSHOPS GO HERE ````
  const workshopNames = ["Smart Automobile Workshop","Current Trends in pharmaceutical sciences","ROBOTICS BOOTCAMP","EXPERT ENCOUNTER","CRYPTOGRAPHY WORKSHOP","3D Rendering Workshop","Quadcopter"]

  return (
    <>
      <div className="background-container-workshops">
        <div className="background-workshops">
          <div className="image-workshops"></div>
          <div className="content-workshops">
            <h1>WORKSHOPS</h1>
          </div>
          <h3 className="subHeader1">PREVIOUS</h3>
          <button className='swiperButtonPrevPrev' onClick={() => {
            console.log("prev");
            swiper.slidePrev()
            }}></button>

          <div className='card1-container'>
            <Slider data={workshopNames} time="prev" type="work" swiper={swiper} setSwiper={setSwiper}/>
          </div>
          <button className='swiperButtonPrevNext' onClick={() => swiper.slideNext()}></button>
          


          <h3 className="subHeader2">CURRENT</h3>
          <button className='swiperButtonCurrPrev' onClick={() => {
            console.log("prev");
            swiper2.slidePrev()
            }}></button>
         
          <div className='card2-container' >
            <Slider data={workshopNames} time="curr" type="work" swiper={swiper2} setSwiper={setSwiper2}/>
          </div>
          <button 
        className='swiperButtonCurrNext' onClick={() => swiper2.slideNext()}></button>
       
        </div>
      </div>
    </>
  );
};

export default Workshops;
