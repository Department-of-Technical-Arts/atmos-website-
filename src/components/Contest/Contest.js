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
    const {competitions, workshops, prefest} = useSelector((state) => state.displayData)
    const params = useParams()
    
    useEffect (() => {
        if (params.type === "comp") {
            console.log("Entered");
            competitions.map((eachCompetition) => {
                console.log(eachCompetition);
                if (eachCompetition.NAME.toLowerCase() === params.id) {
                    console.log("true");
                    setName(eachCompetition)
                }
            })
        }
        if (params.type === "work") {
            workshops.map((eachWorkshop) => {
                if (eachWorkshop.NAME.toLowerCase() === params.id) {
                    setName(eachWorkshop)
                }
            })
        }
    }, [competitions, workshops])

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
            console.log(name);
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
            {name.PRIZEMONEY && <div className='prize'>
                <div className='prize-text'>Rs. {name.PRIZEMONEY} INR</div>
            </div>}
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
                {name.FACEBOOKLINK !== "" &&  <a className='fa fa-facebook' href={name.FACEBOOKLINK} target="_blank"></a>}
                {name.INSTAGRAMLINK !== "" && <a className='fa fa-instagram' href={name.INSTAGRAMLINK} target="_blank"></a>}
                {name.TWITTERLINK !== "" && <a className='fa fa-twitter' href={name.TWITTERLINK} target="_blank"></a>}
            </div>
        </div>
    </div>
    );
}

export default Contest;
