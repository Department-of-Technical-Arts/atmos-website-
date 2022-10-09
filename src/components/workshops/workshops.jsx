// import { React, useState } from "react";
// import "./workshops.css";
// import placeholder from "../../images/competions/pawel-nolbert-62OK9xwVA0c-unsplash 1.png";
// import Slider from "../slider/Slider";
// import "../slider/slider.css";

// const Workshops = () => {
//   const [swiper, setSwiper] = useState(null);
//   const [swiper2, setSwiper2] = useState(null);


  //THE WORKSHOPS GO HERE ````
//   const workshopNames = ["Smart Automobile Workshop","Current Trends in pharmaceutical sciences","ROBOTICS BOOTCAMP","EXPERT ENCOUNTER","CRYPTOGRAPHY WORKSHOP","3D Rendering Workshop","Quadcopter"]

//   return (
//     <>
//       <div className="background-container-workshops">
//         <div className="background-workshops">
//           <div className="image-workshops"></div>
//           <div className="content-workshops">
//             <h1>WORKSHOPS</h1>
//           </div>
//           <h3 className="subHeader1">PREVIOUS</h3>
//           <button className='swiperButtonPrevPrev' onClick={() => {
//             console.log("prev");
//             swiper.slidePrev()
//             }}></button>

//           <div className='card1-container'>
//             <Slider data={workshopNames} time="prev" type="work" swiper={swiper} setSwiper={setSwiper}/>
//           </div>
//           <button className='swiperButtonPrevNext' onClick={() => swiper.slideNext()}></button>
          


//           <h3 className="subHeader2">CURRENT</h3>
//           <button className='swiperButtonCurrPrev' onClick={() => {
//             console.log("prev");
//             swiper2.slidePrev()
//             }}></button>
         
//           <div className='card2-container' >
//             <Slider data={workshopNames} time="curr" type="work" swiper={swiper2} setSwiper={setSwiper2}/>
//           </div>
//           <button 
//         className='swiperButtonCurrNext' onClick={() => swiper2.slideNext()}></button>
       
//         </div>
//       </div>
//     </>
//   );
// };

// export default Workshops;

import React from 'react' ;
import { useEffect } from 'react';
import "./workshops.css";
import workshopsImages from '../../images/events-photos/workshops-images';

function Workshops() {

    const workshopNames = ["MACHINE LEARNING WORKSHOPS","STAR GAZING","FINDING,CLASSIFYING AND ANALYSING EXOPLANETS USING PYTHON","ROBOTICS 101","PM WORKSHOP","CRIME SCENE INVESTIGATION","IOT WORKSHOP","HYBRID VEHICLE WORKSHOP","BLOCKCHAIN WORKSHOP","ANALYTICS WORKSHOP"]
    useEffect(() => {
        document.title = "WORKSHOPS - ATMOS"
        return () => {
            
        };
    }, []);
    return(
        <>
            <div className='background-container-workshops'>
                <div className='background-workshops'>
                    <div className="image-workshops"></div>
                    <div className='content-workshops'>
                        <h1>WORKSHOPS</h1>
                    
                    </div>
                    <div className='card-container-workshops'>
                        {
                            Object.values(workshopNames).map((value,i)=>{
                                return(
                                    <a href={`/contest/work/${i}`}><div className='hover-cards-workshops' style={{ 
                                        backgroundImage: `url(${workshopsImages[i]})`
                                      }}><p>{value}</p></div></a>
                                )
                            })
                        }
                        {/* <div className='hover-cards-workshops'><p>MACHINE LEARNING WORKSHOPS</p></div>
                        <div className='hover-cards-workshops'><p>STAR GAZING</p></div>
                        <div className='hover-cards-workshops big'><p className='bigname'>FINDING,CLASSIFYING AND ANALYSING EXOPLANETS USING PYTHON: AN EXTENSIVE WORKSHOP</p></div>
                        <div className='hover-cards-workshops'><p>ROBOTICS 101</p></div>
                        <div className='hover-cards-workshops'><p>PM WORKSHOP</p></div>
                        <div className='hover-cards-workshops'><p>CRIME SCENE INVESTIGATION</p></div>
                        <div className='hover-cards-workshops'><p>IOT WORKSHOP</p></div>
                        <div className='hover-cards-workshops'><p>HYBRID VEHICLE WORKSHOP</p></div>
                        <div className='hover-cards-workshops'><p>BLOCKCHAIN WORKSHOP</p></div>
                        <div className='hover-cards-workshops'><p>ANALYTICS WORKSHOP</p></div> */}
                  
                    </div>
                </div>
            </div>
        </>
    )
}

export default Workshops;
