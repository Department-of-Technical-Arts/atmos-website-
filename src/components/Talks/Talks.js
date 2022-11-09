import React from 'react' ;
import "./Talks.css";
import talksImages from '../../images/events-photos/talks-images2';
import { useEffect } from "react";
function Talks() {
    let talksNames = ["Nidhi Narwal","Kiran Bedi","Bharat Karnad","Warina Hussain","Dr V Anantha Nageswaran","Arun Prabhudesai","Arvind Goel","Dr. Ravindra Guptha"]
    useEffect(() => {
      document.title = "TALKS - ATMOS"
  }, []);

    return(
        <div>
            <div className='background-container-talks'>
                <div className='background-talks'>
                    <div className="image-talks"></div>
                    <div className='content-talks'>
                        <h1>TALKS</h1>        
                    </div>
                    <div className='card-container-talks'>
                        {
                          Object.values(talksNames).map((value,i)=>{
                            return(
                                <div className='hover-cards-talks' style={{ 
                                    backgroundImage: `url(${talksImages[i]})`
                                  }}><p>{value}</p></div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Talks;