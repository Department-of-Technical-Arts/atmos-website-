import React from 'react' ;
import "../components/css/landing.css"
import {FiArrowDown} from 'react-icons/fi';

function Landing() {
    return(
        <>
            <div className='background-container'>
                <div className='bg'>
                    <div className='content'>
                        <h1>ATMOS</h1>
                    </div>
                </div>
                <FiArrowDown color="white" size="30"/>
            </div>
        </>
    )
}

export default Landing ;