import React from 'react' ;
import "../components/css/events.css"

function Events() {

    return(
        <>
            <div className='background-container'>
                <div className='background'>
                    <div className="image-events"></div>
                    <div className='content-events'>
                        <h1>EVENTS</h1>
                    
                    </div>
                    <div className='card-container'>
                        <div className='hover-cards'><p>Competition</p></div>
                        <div className='hover-cards'><p>workshops</p></div>
                        <div className='hover-cards'><p>talks</p></div>
                        <div className='hover-cards'><p>pro-shows</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Events ;