import React from 'react' ;
import { useEffect } from 'react';
import "./competitions.css";
// import background from '../../images/events-photos/aerreo_cover.jpg';
import competionsImages from '../../images/events-photos/competions-images';
function Competitions() {
    const competionsNames = ["IDRL","The Genesis","ProdStorm","CaseSensitive","Courtroom","Mech Meverick","Robowars","Law Follower","Anatomy Of Murder","Wall Street Business Challenge","Operation Zodiac","Bid Up Vamps", "t-RADICAL", "INNOVATIVE NEXUS", "BINARY BATTLES", "CRUXIPHER", "BITS PLANNING", "GAME OF DRONES", "BITSAT 2.0", "CUBING ATMOSPHERE"]

    useEffect(() => {
        document.title = "COMPETITIONS - ATMOS"
        return () => {
            
        };
    }, []);


    return(
        <>
            <div className='background-container-competitions'>
                <div className='background-competitions'>
                    <div className="image-competitions"></div>
                    <div className='content-competitions'>
                        <h1>COMPETITIONS</h1>
                    
                    </div>
                    <div className='card-container-competitions'>
                        {
                            Object.values(competionsNames).map((value,i)=>{
                                return(
                                    <a href={`/contest/comp/${i}`}><div className='hover-cards-competitions' style={{ 
                                        backgroundImage: `url(${competionsImages[i]})`
                                      }}><p>{value}</p></div></a>
                                )
                            })
                        }
                        {/* <div className='hover-cards-competitions'><p>IDRL</p></div>
                        <div className='hover-cards-competitions'><p>The Genesis</p></div>
                        <div className='hover-cards-competitions'><p>ProdStorm</p></div>
                        <div className='hover-cards-competitions'><p>Case Sensitive</p></div>
                        <div className='hover-cards-competitions'><p>Autocad Competition</p></div>
                        <div className='hover-cards-competitions'><p>Courtroom</p></div>
                        <div className='hover-cards-competitions'><p>Mech Meverick</p></div>
                        <div className='hover-cards-competitions'><p>Robowars</p></div>
                        <div className='hover-cards-competitions'><p>Law Follower</p></div>
                        <div className='hover-cards-competitions'><p>Anatomy Of Murder</p></div>
                        <div className='hover-cards-competitions'><p>Wall Street Business Challenge</p></div>
                        <div className='hover-cards-competitions'><p>Operation Zodiac</p></div>
                        <div className='hover-cards-competitions'><p>Bid Up Vamps</p></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Competitions;