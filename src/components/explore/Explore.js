import React,{useState} from "react";
import {} from "@mui/material";
import "./Explore.css"
import {IoIosArrowForward} from 'react-icons/io';
import {Link,useNavigate} from "react-router-dom"



function Explore(){

    const navigate = useNavigate()
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

    const handleClick = async(e) => {
        isClicked(true)
        await delay(1000)
        navigate('/events')
    }
    
    const [click,isClicked] = useState(false)
    return(
        <>
        {click ? <>
        <div className='background-container1'>
                <div className='bground1'>
                    <div className="image1"></div>
                    <div className='content1'>
                        <h1 className="title1 small-title">TO EXPLORE</h1>
                        <h1 className="title1 big-title">THE FUTURE</h1>
                    </div>
                    <div className="description1">
                        <h4 className="desc1 white">Unforgettable experience to the future for 3 days!</h4>
                        <h4 className="desc1 blue">Future is closer than you think</h4>
                        <button className="explore-btn1" onClick={()=>{isClicked(true)}}>EXPLORE <IoIosArrowForward fontSize={18}/></button>
                        
                    </div>
                    
                </div>
            </div>
      </>
      :
        <div className='background-container'>
                <div className='bground'>
                    <div className="image"></div>
                    <div className='content'>
                        <h1 className="title small-title">TO EXPLORE</h1>
                        <h1 className="title big-title">THE FUTURE</h1>
                    </div>
                    <div className="description">
                        <h4 className="desc white">Unforgettable experience to the future for 3 days!</h4>
                        <h4 className="desc blue">Future is closer than you think</h4>
                        <button className="explore-btn" onClick={handleClick}>EXPLORE <IoIosArrowForward fontSize={18}/></button>
                        
                    </div>
                    
                </div>
            </div>}
            </>
    )
}

export default Explore