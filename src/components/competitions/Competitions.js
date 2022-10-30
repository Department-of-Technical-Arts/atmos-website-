import React, { useState } from 'react' ;
import { useEffect } from 'react';
import "./Competitions.css";
import Papa from "papaparse"

const Competitions = () => {
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
    }, []);

    return(
        <div>
            <div className='background-container-competitions'>
                <div className='background-competitions'>
                    <div className="image-competitions"></div>
                    <div className='content-competitions'>
                        <h1>COMPETITIONS</h1>
                    </div>
                    <div className='card-container-competitions'>
                        {
                            competitionNames.map((eachCompetition)=>{
                                return(
                                    <a href={`/contest/comp/${eachCompetition.NAME.toLowerCase()}`}>
                                        <div className='hover-cards-competitions' style={{ backgroundImage: `url(${eachCompetition.IMAGEURL})`}}>
                                            <p>{eachCompetition.NAME}</p>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Competitions;