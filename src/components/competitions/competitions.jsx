import React from 'react'
import "./competitions.css"
import placeholder from '../../images/competions/pawel-nolbert-62OK9xwVA0c-unsplash 1.png'
import Slider from '../slider/Slider'


const Competitions = () => {
  return (
    <div>
        <div className="headerContainer">
            <h1 className="header">Competitions</h1>
        </div>
        
        <div className="eventsContainer">
          <div>
            <h3 className="subHeader">
              PREVIOUS
            </h3>
            <div className="sliderContainer">
            
            <a href='/contest'><img src={placeholder} alt="bruh" width="207px" height="244px" className="sliderContainer" /></a>
            <a href='/contest'><img src={placeholder} alt="bruh" width="207px" height="244px"  className="sliderContainer" /></a>
            

            </div>
          </div>
          <div>
          <h3 className="subHeader">
          CURRENT
            </h3>
            <div className="sliderContainer">
              <a href='/contest'><img src={placeholder} alt="bruh" width="207px" height="244px" className="sliderContainer" /></a>
              <a href='/contest'><img src={placeholder} alt="bruh" width="207px" height="244px"  /></a>
              {/* <Slider/> */}
            </div>
          </div>
        </div>

    </div>
  )
}

export default Competitions
