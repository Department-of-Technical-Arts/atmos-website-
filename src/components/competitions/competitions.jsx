import {React, useState} from 'react'
import "./competitions.css"
import { Swiper, SwiperSlide} from 'swiper/react';

import placeholder from '../../images/competions/pawel-nolbert-62OK9xwVA0c-unsplash 1.png'
import Slider from '../slider/Slider'
import Slider2 from '../slider/Slidercomcurr'
import '../slider/slider.css'

const Competitions = () => {
  const [swiper, setSwiper] = useState(null);
  const [swiper2, setSwiper2] = useState(null);

  return (
    <>
    <div className='background-container'>
        <div className='background'>
            <div className="image-events"></div>
            <div className='content-events'>
                <h1>COMPETITIONS</h1>

            </div>
            {/* <div className='card-container'>
                <a href="/competitions"><div className='hover-cards'><p>Competition</p></div></a>
                <a href="/workshops"><div className='hover-cards'><p>workshops</p></div></a>
                <a href="/talks"><div className='hover-cards'><p>talks</p></div></a>
                <a href="/proshows"><div className='hover-cards'><p>pro-shows</p></div></a>
            </div> */}
            <h3 className="subHeader1">PREVIOUS</h3>
          <button className='swiperButtonPrev' onClick={() => {
            console.log("prev");
            swiper.slidePrev()
            }}></button>

          <div className='card1-container'>
            <Slider swiper={swiper} setSwiper={setSwiper}/>
          </div>
          <button className='swiperButtonNext' onClick={() => swiper.slideNext()}></button>
          


          <h3 className="subHeader2">CURRENT</h3>
          <button className='swiperButtonPrev leftarrow' onClick={() => {
            console.log("prev");
            swiper2.slidePrev()
            }}></button>
         
          <div className='card2-container' >
          <Slider swiper={swiper2} setSwiper={setSwiper2}/>
          </div>
          <button 
        className='swiperButtonNext rightarrow' onClick={() => swiper2.slideNext()}></button>
       
        </div>
    </div>
</>
  )
}

export default Competitions
