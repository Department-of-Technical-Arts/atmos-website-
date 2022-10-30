import React from 'react' ;
import { useEffect } from 'react';
import "./Prefest.css";
import prefestImages from '../../images/events-photos/prefest-images';

const Prefest = () => {
    const prefestNames = ["UNDER PRESSURE","IEEE IMAGE-PROCESSING", "CODE DRIFT 2022", "AEROPLANES 101", "AERO QUIZ", "WSC TRADING CHALLENGE", "INTRO TO CONSULTANCY", "CAD WORKSHOP", "QUADCOPTER WORKSHOP", "WHAT IF", "QUANT WORKSHOP", "SUDOSTAR", "ARTHASHASTRA", "COD-E-NZYME"]

    useEffect(() => {
        document.title = "PRE-FEST - ATMOS"
    }, []);

    return(
        <div>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prefest;