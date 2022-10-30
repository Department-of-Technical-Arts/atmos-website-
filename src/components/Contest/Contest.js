import {React, useState, useEffect} from 'react';
import {  useParams } from 'react-router-dom'
import { useMediaQuery } from '@mui/material';
import prefestImages from '../../images/events-photos/prefest-images';
import './Contest.css';
import Papa from "papaparse"


const Contest = () => {
    const isTablet = useMediaQuery('(max-width:480px)','(max-height:1024px)');
    const isMobile = useMediaQuery('(max-width: 320px)','(max-height: 480px)');
    const [name, setName] = useState ({NAME: ""})
    const params = useParams()
    
    useEffect (() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQDM_B5Mbm4oE1Xn9e_lCYAS5eIWJi-Q-lCbsNsAcLPI-vxasaFAI0NeJQNfU8Mlvx2dXKZpvt99yS_/pub?output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                for (var i = 0; i < results.data.length ; i++) {
                    if (results.data[i].NAME.toLowerCase() === params.id) {
                        setName (results.data[i])
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
                        setName (results.data[i])
                    }
                }
            }
        })
    }, [])

    const prefest ={
        "UNDER PRESSURE":"There will be two players per team. Each team competes against one other team of two people on a table which represents a “system of particles”. Of the two teams on a system, one will be Adders who add particles to the system and the other will be Removers who remove particles from the system.",
        "IEEE IMAGE-PROCESSING":"Getting acquainted image processing algorithms and understanding its implementation on hardware. Image Processing using FPGAs",
        "CODE DRIFT 2022":"Online competitive coding competition held on CodeChef platform. It will be a rated contest as per of the Starters series of CodeChef. Each participant will get a set of 7 questions to solve out of a pool of 10 depending on what division they are in (based on rating).",
        "AEROPLANES 101":"Participants will learn how aeroplanes fly. They will learn the functioning of various components on an aeroplane.",
        "AERO QUIZ":"2 rounds would be conducted. Round 1 would be online after the aero workshop. Round 2 would be conducted during the fest.",
        "WSC TRADING CHALLENGE":"WSC Trading Challenge is a Virtual Stock Market based trading competition conducted by The Wall Street Club, BITS Hyderabad. This Paper Trading week-long event allows participants to apply their trading skills like Technical Analysis, Risk Management, Position Sizing, and Market Psychology. Participants get to experience the Stock Market and improve their trading skills; also, they stand to win amazing cash prizes.",
        "INTRO TO CONSULTANCY":"Students will get to know about the field of consultancy. They will be taught how to approach guesstimates, different cases, do research and analysis based upon a client’s requirements",
        "CAD WORKSHOP":"CAD (computer-aided design) is the use of computer-based software to aid in design processes. CAD software is frequently used by different types of engineers and designers to create two-dimensional (2-D) drawings or three-dimensional (3-D) models. The workshop aims to teach this skill of CAD to whosoever attends the workshop. Attendants will be taught the basic tools of the CAD software. Basic modelling will be demonstrated followed by a small project. At the end of the workshop a small competition will be organized for which the participants will be given time to submit their designs.",
        "QUADCOPTER WORKSHOP":"The members of PHoEnix association will be teaching how to build ,assemble and fly a quadcopter. During the workshop they will learn about the components used to build a drone and how they work. The participants need to purchase the kits from the SWD portal. People who are interested can get their drones and Learn to Pilot it.",
        "WHAT IF":"The event at hand is a team event with preferably 3-5 players (offline mode) and single players (online mode) with we taking the teams through a three-stage contest. The bedrock of this event is how good a person is with thought experiments which is ideally the bedrock of most things “Astra”. We would be posing a team with random and then not-so-random situations based on movie scene settings, and classics, and going all the way up to totally imaginary ones. We would ask them to point out things ranging from what is happening here to flaws and what would happen if…??",
        "QUANT WORKSHOP":"Quant Workshop by Sai Kumar: Quantitative analysis is the use of mathematical and statistical methods in finance and investment banking.",
        "SUDOSTAR":"To those of us whose day begins with a cup of warm beverage and a pencil in hand to solve the latest sudoku in the newspaper, Axiom’s Sudostar is the perfect challenge. Discover the classic sudoku in variations you’ve never seen before. If you pride yourself on your problem-solving abilities, put on your thinking cap and try your hands at solving these fascinating mathematical puzzles!",
        "ARTHASHASTRA":"A finance business time-bound quiz with one or multiple rounds. This is the place where you can show case your finance, trading and economics knowledge, with a thrilling experience of time rush quick thinking and getting to the right answer.",
        "COD-E-NZYME":"The event is a competitive coding competition involving the concepts of Biology. People who don’t have a biological background can also participate freely in the competition because the pre-requisite theory would be provided for every question. They can read them and try coding the solutions for the questions. Points would be awarded according to the success in solving the problem.",
    }

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
                {register && 
                <div className='button-view'>
                    <button className='button'>
                        REGISTER
                    </button>
                </div>}
                <div className='button-view'>
                    <button className='button'>
                        EXPLORE
                    </button>
                </div>
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
                <div className='fb'>
                </div>
                <div className='tw'>
                </div>
                <div className='ig'>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Contest;
