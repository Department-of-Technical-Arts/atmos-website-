import {React, useState} from 'react'
import "./proshows.css"
import placeholder from '../../images/competions/pawel-nolbert-62OK9xwVA0c-unsplash 1.png'
import Slider from '../slider/Slider'
import Slider2 from '../slider/Slidercomcurr'


const ProShows = () => {
  const [swiper, setSwiper] = useState(null);
  const [swiper2, setSwiper2] = useState(null);
  return (
    // <div>
    //     <div className="headerContainer">
    //         <h1 className="header">Pro-Shows</h1>
    //     </div>

    //     <div className="eventsContainer">
    //       <div>
    //         <h3 className="subHeader">
    //           PREVIOUS
    //         </h3>
    //         <div className="sliderContainer">
    //         <img src={placeholder} alt="bruh" width="207px" height="244px" className="sliderContainer" />
    //         <img src={placeholder} alt="bruh" width="207px" height="244px"  className="sliderContainer" />


    //         </div>
    //       </div>
    //       <div>
    //       <h3 className="subHeader">
    //       CURRENT
    //         </h3>
    //         <div className="sliderContainer">
    //           <img src={placeholder} alt="bruh" width="207px" height="244px" className="sliderContainer" />
    //           <img src={placeholder} alt="bruh" width="207px" height="244px"  />
    //           {/* <Slider/> */}
    //         </div>
    //       </div>
    //     </div>

    // </div>
    <>
      <div className='background-container'>
        <div className='background'>
          <div className="image-events"></div>
          <div className='content-events'>
            <h1>PROSHOWS</h1>

          </div>

          

          <h3 className="subHeader1">PREVIOUS</h3>
          <h3 className="subHeader2">CURRENT</h3>
          <button className='swiperButtonPrev' onClick={() => {
            console.log("prev");
            swiper.slidePrev()
            }}></button>

          <div className='card1-container'>
            
          <Slider swiper={swiper} setSwiper={setSwiper}/>

          </div>
          <button className='swiperButtonNext' onClick={() => swiper.slideNext()}></button>

          <button className='swiperButtonPrev leftarrow' onClick={() => {
            console.log("prev");
            swiper2.slidePrev()
            }}></button>
          <div className='card2-container'>
          <Slider swiper={swiper2} setSwiper={setSwiper2}/>
          </div>
          <button className='swiperButtonNext rightarrow' onClick={() => swiper2.slideNext()}></button>


        </div>

      </div>
    </>
  )
}

export default ProShows
