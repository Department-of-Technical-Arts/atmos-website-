import React from 'react' ;
import { useEffect } from 'react';
import "./Prefest.css";
import { useSelector } from 'react-redux';

const Prefest = () => {
    const {prefest} = useSelector ((state) => state.displayData)
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
                            prefest.map((eachPrefest)=>{
                                return(
                                    <a href={`/contest/prefest/${eachPrefest.NAME.toLowerCase()}`}><div className='hover-cards-prefest' style={{ 
                                        backgroundImage: `url(${eachPrefest.IMAGEURL})`
                                      }}><p>{eachPrefest.NAME}</p></div></a>
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