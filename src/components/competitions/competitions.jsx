import React, { useState } from 'react' ;
import { useEffect } from 'react';
import "./competitions.css";
// import background from '../../images/events-photos/aerreo_cover.jpg';
import competionsImages from '../../images/events-photos/competions-images';
import Papa from "papaparse"

function Competitions() {
    const [competitionNames, setCompetitionNames] = useState([])

    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQDM_B5Mbm4oE1Xn9e_lCYAS5eIWJi-Q-lCbsNsAcLPI-vxasaFAI0NeJQNfU8Mlvx2dXKZpvt99yS_/pub?output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setCompetitionNames(results.data)
                console.log(results.data);
            }
        })
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
                            Object.values(competitionNames).map((eachCompetition)=>{
                                return(
                                    <a href={`/contest/comp/${eachCompetition.NAME.toLowerCase()}`}><div className='hover-cards-competitions' style={{ 
                                        backgroundImage: `url(${eachCompetition.IMAGEURL})`
                                      }}><p>{eachCompetition.NAME}</p></div></a>
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

export default  Competitions;