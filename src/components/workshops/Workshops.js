import React, { useState } from 'react' ;
import { useEffect } from 'react';
import "./Workshops.css";
import Papa from "papaparse"

const Workshops = () => {
    const [workshop, setWorkshop] = useState ([])
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTbwA6Nvy_YMR6psLNstZpoNM6vOOfO7TGEjiyrNHfGqkK_okk-3FraMri13nxR_x4V1l5alSQmQ8Co/pub?output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setWorkshop(results.data)
                console.log(results.data);
            }
        })
        document.title = "WORKSHOPS - ATMOS"
    }, []);

    return(
        <div>
            <div className='background-container-workshops'>
                <div className='background-workshops'>
                    <div className="image-workshops"></div>
                    <div className='content-workshops'>
                        <h1>WORKSHOPS</h1>
                    </div>
                    <div className='card-container-workshops'>
                        {
                            workshop.map((value)=>{
                                return(
                                    <a href={`/contest/work/${value.NAME.toLowerCase()}`}><div className='hover-cards-workshops' style={{ 
                                        backgroundImage: `url(${value.IMAGEURL})`
                                      }}><p>{value.NAME}</p></div></a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workshops;
