import React from "react";
import {AppBar} from "@mui/material";
import "./Explore.css"
import {IoIosArrowForward} from 'react-icons/io';

function Explore(){
    return(
        <div className='background-container'>
                <div className='bground'>
                    <div className='content'>
                        <h1 className="title small-title">TO EXPLORE</h1>
                        <h1 className="title big-title">THE FUTURE</h1>
                    </div>
                    <div className="description">
                        <h4 className="desc white">Unforgettable experience to the future for 3 days!</h4>
                        <h4 className="desc blue">Future is closer than you think</h4>
                        <button className="explore-btn">EXPLORE <IoIosArrowForward fontSize={18}/></button>
                    </div>
                    
                </div>
            </div>
    )
}

export default Explore