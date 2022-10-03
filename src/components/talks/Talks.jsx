/*
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
*/

import React from 'react' ;
import "./talks.css";

function Talks() {


    return(
        <>
            <div className='background-container-talks'>
                <div className='background-talks'>
                    <div className="image-talks"></div>
                    <div className='content-talks'>
                        <h1>TALKS</h1>
                    
                    </div>
                    <div className='card-container-talks'>
                        <div className='hover-cards-talks'><p>IDRL</p></div>
                        <div className='hover-cards-talks'><p>The Genesis</p></div>
                        <div className='hover-cards-talks'><p>ProdStorm</p></div>
                        <div className='hover-cards-talks'><p>Case Sensitive</p></div>
                        <div className='hover-cards-talks'><p>Autocad Competition</p></div>
                        <div className='hover-cards-talks'><p>Courtroom</p></div>
                        <div className='hover-cards-talks'><p>Mech Meverick</p></div>
                        <div className='hover-cards-talks'><p>Robowars</p></div>
                        <div className='hover-cards-talks'><p>Law Follower</p></div>
                        <div className='hover-cards-talks'><p>Anatomy Of Murder</p></div>
                        <div className='hover-cards-talks'><p>Wall Street Business Challenge</p></div>
                        <div className='hover-cards-talks'><p>Operation Zodiac</p></div>
                        <div className='hover-cards-talks'><p>Bid Up Vamps</p></div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Talks;