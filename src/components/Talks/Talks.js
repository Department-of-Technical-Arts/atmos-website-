import React from 'react' ;
import "./Talks.css";
// import talksImages from '../../images/events-photos/talks-images2';
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { urlEndpoint } from "../../config";

function Talks() {
    const {talks} = useSelector (state => state.displayData)
    // let talksNames = ["Nidhi Narwal","Kiran Bedi","Bharat Karnad","Warina Hussain","Dr V Anantha Nageswaran","Arun Prabhudesai","Arvind Goel","Dr. Ravindra Guptha"]
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
                          talks.map((eachTalk)=>{
                            if (eachTalk.IMAGEURL)
                            return(
                                <div key={eachTalk.NAME} className='hover-cards-talks' style={{ 
                                    backgroundImage: `url(${urlEndpoint}talks/${eachTalk.IMAGEURL})`
                                  }}><p>{eachTalk.NAME}</p></div>
                            )
                        })
                        }
                    </div>
                    {/* <div className='card-container-talks'>
                        {
                          talksNames.map((eachTalk, index)=>{
                            return(
                                <div key={eachTalk} className='hover-cards-talks' style={{ 
                                    backgroundImage: `url(${talksImages[index]})`
                                  }}><p>{eachTalk}</p></div>
                            )
                        })
                        }
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Talks;