import React from 'react'
import "./workshops.css"
import placeholder from '../../images/competions/pawel-nolbert-62OK9xwVA0c-unsplash 1.png'
import Slider from '../slider/Slider'


const Workshops = () => {
  return (
          <>
            <div className='background-container'>
                <div className='background'>
                    <div className="image-events"></div>
                    <div className='content-events'>
                        <h1>WORKSHOPS</h1>
                    
                    </div>
                    <div className='card-container'>
                        <a href="/competitions"><div className='hover-cards'><p>Competition</p></div></a>
                        <a href="/workshops"><div className='hover-cards'><p>workshops</p></div></a>
                        <a href="/talks"><div className='hover-cards'><p>talks</p></div></a>
                        <a href="/proshows"><div className='hover-cards'><p>pro-shows</p></div></a>
                    </div>
                </div>
            </div>
          </>
  )
}

export default Workshops
