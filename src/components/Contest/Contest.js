import {React, useState, useEffect} from 'react';
import {  useParams } from 'react-router-dom'
import { useMediaQuery } from '@mui/material';
import prefestImages from '../../images/events-photos/prefest-images';
import './Contest.css';
import Papa from "papaparse"
import { useSelector } from 'react-redux';


const Contest = () => {
    const isTablet = useMediaQuery('(max-width:480px)','(max-height:1024px)');
    const isMobile = useMediaQuery('(max-width: 320px)','(max-height: 480px)');
    const [name, setName] = useState ({NAME: ""})
    const {competitions, workshops} = useSelector((state) => state.displayData)
    const params = useParams()
    
    useEffect (() => {
        if (params.type === "comp") {
            competitions.map((eachCompetition) => {
                if (eachCompetition.NAME.toLowerCase() === params.id)x
            })
        }
        console.log(params.id);
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQDM_B5Mbm4oE1Xn9e_lCYAS5eIWJi-Q-lCbsNsAcLPI-vxasaFAI0NeJQNfU8Mlvx2dXKZpvt99yS_/pub?output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                for (var i = 0; i < results.data.length ; i++) {
                    if (results.data[i].NAME.toLowerCase() === params.id) {
                        console.log(params.id);
                        setName (results.data[i])
                        console.log(results.data[i]);
                    }
                }
            }
        })
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQDM_B5Mbm4oE1Xn9e_lCYAS5eIWJi-Q-lCbsNsAcLPI-vxasaFAI0NeJQNfU8Mlvx2dXKZpvt99yS_/pub?output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                for (var i = 0; i < results.data.length ; i++) {
                    if (results.data[i].NAME.toLowerCase() === params.id) {
                        console.log(params.id);
                        setName (results.data[i])
                        console.log(results.data[i])
                    }
                }
            }
        })
    }, [])

    const [title_names, setTitle] = useState("")
    const [description, setDescript] = useState("")
    const [images, setImages] = useState([""])
    const [register, setReg] = useState(false)
    useEffect(() => {
        
        if (params.type=="comp") {
            setTitle(name.NAME)
            setDescript(name.DESCRIPTION)
            setImages(name.IMAGEURL)
        }
        else if(params.type=="work"){
            setTitle(name.NAME)
            setDescript(name.DESCRIPTION)
            setImages(name.IMAGEURL)
        }
        const title = document.getElementById("contest-page-title");
        var numWords = name.NAME.split(' ').length; 
        if (numWords > 2) {
            title.style.fontSize = "6.8vh";
        }
        if (numWords > 5) {
            title.style.fontSize = "3.8vh";
        }
            else if(params.type=="prefest"){
            Object.keys(prefest).forEach((value,i)=>{
            if (i==params.id){
                setTitle(value)
                setDescript(prefest[value])
                setImages(prefestImages)
                
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
        document.title = name.NAME.toUpperCase() + " - ATMOS"
    },[name])

    return (
    <div className='background'>
        <div className='contest_image'></div>
        <div className='content-left content-full'>
            <div 
                className='photo' 
                style={{ 
                    backgroundImage: `url(${name.IMAGEURL})`
                }}
            >
            </div>
            <div className='prize'>
                <div className='prize-text'>Rs. {name.PRIZEMONEY} INR</div>
            </div>
            <div className='buttons-menu'>
                {/* {register && 
                <div className='button-view'>
                    <button  className='button'>
                        <a style={{textDecoration:"none", color:"white"}} href={`/contest/${params.type}/${params.id}/register`}>
                            REGISTER
                        </a>
                    </button>
                </div>} */}
                {/* <div className='button-view'>
                    <button className='button'>
                        EXPLORE
                    </button>
                </div> */}
            </div>
        </div>
        <div className='content-right content-full'>
            <div id="contest-page-title" className='contest-title'>
                {name.NAME}
            </div>
            <div className='contest-description'>
                {name.DESCRIPTION}
            </div>
            <div className='socials'>
                {name.FACEBOOKLINK !== "" &&  <a className='fb' href={name.FACEBOOKLINK} target="_blank">F</a>}
                {name.INSTAGRAMLINK !== "" && <a className='ig' href={name.INSTAGRAMLINK} target="_blank">I</a>}
                {name.TWITTERLINK !== "" && <a className='tw' href={name.TWITTERLINK} target="_blank">T</a>}
            </div>
        </div>
    </div>
    );
}

export default Contest;
