import React from 'react' ;
import { useEffect } from 'react';
import "./prefest.css";
// import background from '../../images/events-photos/aerreo_cover.jpg';
import prefestImages from '../../images/events-photos/prefest-images';
function Prefest() {
    const prefestNames = ["UNDER PRESSURE","IEEE IMAGE-PROCESSING", "CODE DRIFT 2022", "AEROPLANES 101", "AERO QUIZ", "WSC TRADING CHALLENGE", "INTRO TO CONSULTANCY", "CAD WORKSHOP", "QUADCOPTER WORKSHOP", "WHAT IF", "QUANT WORKSHOP", "SUDOSTAR", "ARTHASHASTRA", "COD-E-NZYME"]

    useEffect(() => {
        document.title = "PRE-FEST - ATMOS"
        return () => {
            
        };
    }, []);


    return(
        <>
            <div className='background-container-prefest'>
                <div className='background-prefest'>
                    <div className="image-prefest"></div>
                    <div className='content-prefest'>
                        <h1>PREFEST</h1>
                    
                    </div>
                    <div className='card-container-prefest'>
                        {
                            Object.values(prefestNames).map((value,i)=>{
                                return(
                                    <a href={`/contest/prefest/${i}`}><div className='hover-cards-prefest' style={{ 
                                        backgroundImage: `url(${prefestImages[i]})`
                                      }}><p>{value}</p></div></a>
                                )
                            })
                        }
                        {/* <div className='hover-cards-prefest'><p>IDRL</p></div>
                        <div className='hover-cards-prefest'><p>The Genesis</p></div>
                        <div className='hover-cards-prefest'><p>ProdStorm</p></div>
                        <div className='hover-cards-prefest'><p>Case Sensitive</p></div>
                        <div className='hover-cards-prefest'><p>Autocad Competition</p></div>
                        <div className='hover-cards-prefest'><p>Courtroom</p></div>
                        <div className='hover-cards-prefest'><p>Mech Meverick</p></div>
                        <div className='hover-cards-prefest'><p>Robowars</p></div>
                        <div className='hover-cards-prefest'><p>Law Follower</p></div>
                        <div className='hover-cards-prefest'><p>Anatomy Of Murder</p></div>
                        <div className='hover-cards-prefest'><p>Wall Street Business Challenge</p></div>
                        <div className='hover-cards-prefest'><p>Operation Zodiac</p></div>
                        <div className='hover-cards-prefest'><p>Bid Up Vamps</p></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prefest;