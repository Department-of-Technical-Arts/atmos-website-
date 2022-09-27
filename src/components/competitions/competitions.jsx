import React from 'react'
import "./competitions.css"
import placeholder from '../../images/competions/pawel-nolbert-62OK9xwVA0c-unsplash 1.png'
import Slider from '../slider/Slider'


const Competitions = () => {
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
          <h3 className="subHeader2">CURRENT</h3>
          <div className='card1-container'>
            
            <Slider />

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

export default Competitions
