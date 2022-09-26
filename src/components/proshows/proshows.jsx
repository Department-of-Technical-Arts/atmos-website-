import React from 'react'
import "./proshows.css"
import placeholder from '../../images/competions/pawel-nolbert-62OK9xwVA0c-unsplash 1.png'
import Slider from '../slider/Slider'


const ProShows = () => {
  return (
    <div>
        <div className="headerContainer">
            <h1 className="header">Pro-Shows</h1>
        </div>
        
        <div className="eventsContainer">
          <div>
            <h3 className="subHeader">
              PREVIOUS
            </h3>
            <div className="sliderContainer" >
            <img src={placeholder} alt="bruh" width="207px" height="244px" className="sliderContainer" />
            <img src={placeholder} alt="bruh" width="207px" height="244px"  className="sliderContainer" />
            

            </div>
          </div>
          <div>
          <h3 className="subHeader">
          CURRENT
            </h3>
            <div className="sliderContainer">
              <img src={placeholder} alt="bruh" width="207px" height="244px" className="sliderContainer" />
              <img src={placeholder} alt="bruh" width="207px" height="244px"  />
              {/* <Slider/> */}
            </div>
          </div>
        </div>

    </div>
  )
}

export default ProShows
