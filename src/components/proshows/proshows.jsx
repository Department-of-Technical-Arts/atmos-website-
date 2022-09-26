import React from 'react'
import "./proshows.css"
import placeholder from '../../images/competions/pawel-nolbert-62OK9xwVA0c-unsplash 1.png'



const ProShows = () => {
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
          <h3 className="subHeader2">NEXT</h3>
          <div className='card1-container'>
            
            <a href="/competitions"><div className='hover-cards'></div></a>
            <a href="/workshops"><div className='hover-cards'></div></a>

          </div>

         
          <div className='card2-container'>
            <a href="/talks"><div className='hover-cards'></div></a>
            <a href="/proshows"><div className='hover-cards'></div></a>
          </div>


        </div>

      </div>
    </>
  )
}

export default ProShows
