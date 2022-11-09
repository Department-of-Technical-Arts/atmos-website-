import React, { useState } from 'react' ;
import { useEffect } from 'react';
import "./Competitions.css";
import { useSelector } from 'react-redux';
import { urlEndpoint } from "../../config";

const Competitions = () => {
    const {competitions} = useSelector ((state) => state.displayData)
    useEffect(() => {
        document.title = "COMPETITIONS - ATMOS"
    }, []);
    console.log();

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
                            competitions.map((eachCompetition)=>{
                                if (eachCompetition.IMAGEURL)
                                    return(
                                        <a key={eachCompetition.NAME} href={`/contest/comp/${eachCompetition.NAME.toLowerCase()}`}>
                                            <div className='hover-cards-competitions' style={{ backgroundImage: `url(${urlEndpoint}${eachCompetition.IMAGEURL})`}}>
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