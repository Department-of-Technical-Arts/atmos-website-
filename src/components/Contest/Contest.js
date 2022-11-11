import { React, useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom'
import { useMediaQuery } from '@mui/material';
import prefestImages from '../../images/events-photos/prefest-images';
import './Contest.css';
import { Actions } from "../../redux/index"
import { urlEndpoint } from "../../config";
import { Spinner } from "reactstrap"
import { useDispatch, useSelector } from 'react-redux';


const Contest = () => {
    const isTablet = useMediaQuery('(max-width:480px)','(max-height:1024px)');
    const isMobile = useMediaQuery('(max-width: 320px)','(max-height: 480px)');
    const [loader, setLoader] = useState(true)
    const {competitions, workshops, prefest, selectedEvent} = useSelector((state) => state.displayData)
    const params = useParams()
    const dispatch = useDispatch ()
    
    useEffect (() => {
        if (params.type === "comp") {
            competitions.map((eachCompetition) => {
                if (eachCompetition.NAME.toLowerCase() === params.id) {
                    dispatch (Actions.initializeSelectedEvent(eachCompetition))
                    localStorage.setItem("event", JSON.stringify(eachCompetition))
                    setLoader(false)
                }
            })
        }
        if (params.type === "work") {
            workshops.map((eachWorkshop) => {
                if (eachWorkshop.NAME.toLowerCase() === params.id) {
                    dispatch (Actions.initializeSelectedEvent(eachWorkshop))
                    setLoader(false)
                }
            })
        }
        if (params.type === "prefest") {
            prefest.map((eachPrefest) => {
                if (eachPrefest.NAME.toLowerCase() === params.id) {
                    dispatch (Actions.initializeSelectedEvent(eachPrefest))
                    setLoader(false)
                }
            })
        }
    }, [competitions, workshops])

    const [register, setReg] = useState(false)
    useEffect(() => {
        const title = document.getElementById("contest-page-title");
        var numWords = selectedEvent?.NAME?.split(' ').length; 
        if (numWords > 2) {
            title.style.fontSize = "6.8vh";
        }
        if (numWords > 5) {
            title.style.fontSize = "3.8vh";
        }
            else if(params.type=="prefest"){
            Object.keys(prefest).forEach((value,i)=>{
            if (i==params.id){
                
                const title = document.getElementById("contest-page-title");
    
                var numWords = value.split(' ').length; 

                if (numWords > 2) {
                    title.style.fontSize = "6.8vh";
                }
                if (numWords > 5) {
                    title.style.fontSize = "3.8vh";
                }
            }})
        }
        setReg(true)
    },[])
    useEffect(() => {
        document.title = selectedEvent?.NAME?.toUpperCase() + " - ATMOS"
    },[selectedEvent])

    return (
    <div className='background'>
        {loader ?<div className='spinner'> <Spinner color='light' type='grow' /> LOADING ....</div> :
        <div>
        <div className='contest_image'></div>
        <div className='content-left content-full'>
            <div 
                className='photo' 
                style={{ 
                    backgroundImage: `url(${urlEndpoint}${selectedEvent?.IMAGEURL})`
                }}
            >
            </div>
            {selectedEvent.PRIZEMONEY && <div className='prize'>
                <div className='prize-text'>Rs. {selectedEvent?.PRIZEMONEY} INR</div>
            </div>}
            <div className='buttons-menu'>
                {register && 
                <div className='button-view'>
                    <button  className='button'>
                        {params.type === "work" ? <a target="_blank" style={{textDecoration:"none", color:"white"}} href={selectedEvent?.D2CLINK}>
                            REGISTER
                        </a> :
                        <a style={{textDecoration:"none", color:"white"}} href={`/contest/${params.type}/${params.id}/register`}>
                            REGISTER
                        </a>
                        }
                        
                    </button>
                </div>}
                {selectedEvent.EXPLORE && 
                <div className='button-view'>
                    <button className='button'>
                        <a target="_blank" style={{textDecoration:"none", color:"white"}} href={selectedEvent?.EXPLORE}>
                            EXPLORE
                        </a>
                    </button>
                </div>
                }
            </div>
        </div>
        <div className='content-right content-full'>
            <div id="contest-page-title" className='contest-title'>
                {selectedEvent?.NAME}
            </div>
            <div className='contest-description'>
                {selectedEvent?.DESCRIPTION}
            </div>
            <div className='socials'>
                {selectedEvent?.FACEBOOKLINK !== "" &&  <a className='fa fa-facebook' href={selectedEvent.FACEBOOKLINK} target="_blank"></a>}
                {selectedEvent?.INSTAGRAMLINK !== "" && <a className='fa fa-instagram' href={selectedEvent.INSTAGRAMLINK} target="_blank"></a>}
                {selectedEvent?.TWITTERLINK !== "" && <a className='fa fa-twitter' href={selectedEvent.TWITTERLINK} target="_blank"></a>}
            </div>
        </div>
        </div>  
    }
    </div>
    );
}

export default Contest;
