import React from 'react' ;


import Imagegrid from './sponsors/imagegrid';
import './sponsors/gallery.css'

function Sponsors() {

    return(
        <>
            <>
      <div className="background-container-gallery">
        <div className="background-gallery">
          <div className="image-gallery"></div>
          <div className="content-gallery">
            <h1 className="oursponsors-title">Our Previous Sponsors</h1>
            <h1 className='sponsors-title'>Title Sponsor</h1>
            <h1 className='cotitle-sponsors'>Co-Title Sponsors</h1>
            <h1 className='associate-sponsors'>Associate Sponsors</h1>
            <h1 className='gold-sponsors'>Gold Sponsors</h1>
          </div>
          <Imagegrid />
        </div>
      </div>
    </>
        </>
    )
}

export default Sponsors ;