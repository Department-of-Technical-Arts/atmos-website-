import React  from 'react' ;
import { useEffect } from 'react';
import "./Workshops.css";
import { urlEndpoint } from '../../config';
import { useSelector } from 'react-redux';

const Workshops = () => {
    const {workshops} = useSelector ((state) => state.displayData)
    useEffect(() => {
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
                            workshops.map((eachWorkshop)=>{
                                if (eachWorkshop.IMAGEURL)
                                return(
                                    <a key={eachWorkshop.NAME} href={`/contest/work/${eachWorkshop.NAME.toLowerCase()}`}><div className='hover-cards-workshops' style={{ 
                                        backgroundImage: `url(${urlEndpoint}${eachWorkshop.IMAGEURL})`
                                      }}><p>{eachWorkshop.NAME}</p></div></a>
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
