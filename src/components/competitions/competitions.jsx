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
                    <div className='card-container-competition-1 .competition-cards-1'>
                      <p>Previous</p>
                      <a href="/competitions"><div className='hover-cards'><p></p></div></a>
                      <a href="/workshops"><div className='hover-cards'><p></p></div></a>
                    </div>
                    <div className='card-container-competition-2 .competition-cards-2'>
                      <p>Current</p>
                      <a href="/talks"><div className='hover-cards'><p></p></div></a>
                      <a href="/proshows"><div className='hover-cards'><p></p></div></a>
                    </div>
                </div>
            </div>
          </>
  )
}

export default Competitions
