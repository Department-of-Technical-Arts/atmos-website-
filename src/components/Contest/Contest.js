import {React, useState, useEffect} from 'react';
import {  useParams, useSearchParams } from 'react-router-dom'
import { useMediaQuery } from '@mui/material';
import competionsImages from '../../images/events-photos/competions-images';
import workshopsImages from '../../images/events-photos/workshops-images';
import './Contest.css';


function Contest({title = "CONTEST", desc = "Participants are invited to the battle of coding. Test your programming and algorithmic skills while competing with the world's best programmers solving the intense and innovative competition coding problems.", prize = "INR 10,000 PRIZE"}) 
{
    const isTablet = useMediaQuery('(max-width:480px)','(max-height:1024px)');
    const isMobile = useMediaQuery('(max-width: 320px)','(max-height: 480px)');


    const params = useParams()
    const competions = {
        "IDRL":"IDRL stands for Indian Drone Racing League. They conduct FPV drone racing events across India. They have a roster of over 4000 national and international pilots. Drone Racers fly their drones at more than 140 km/hr through a live video feed sent from the drones directly to the pilot’s goggles",
        "The Genesis":"An integrated workshop cum competition where we would teach the participants to use a software where there would be designing molecules and then they would also be getting an opportunity to work in a lab and make a such substances which they can take back home as a souvenir",
        "ProdStorm":"Product Design/Improvement question which will be judged based on user empathy, solutions and deck presentation. We will get an expert panel to judge the participants.",
        "CaseSensitive":"The Event revolves around Strategy Consulting, Business Problem Solving, Case Study Solving, Marketing etc. The problem statement will be released during the week of submission once the partner is finalised.",
        "Courtroom":"Recent corporate cases but names will be changed participants will be briefed about the case and they have to take one of the sides as plaintiff or defendant and present that side in front of a judge or jury.",
        "Mech Meverick":"A fun quizzical event with a twist, the questions asked will have 5-6 different answers, which will be allotted points on the basis of their popularity which will be determined by a sample set consisting of the same answers which will be collected via a survey. Follows the pattern of a reality TV show “Family Feud”.",
        "Robowars":"Design and build a robust bot with effective offence and defensive mechanisms to defeat other bots and rise to the top of the leaderboard. The number of rounds, type of tournament and (random) match fixtures shall be made after registration of all teams is complete.",
        "Law Follower":"An offline, one round competition where participants build robots that autonomously follow a set path from start to finish in the shortest time possible. Points are earned for completing the track with the least penalties. Expected to take place for one full day during the fest.",
        "Anatomy Of Murder":"Anatomy of Murder is a crime mystery event being organized by Synapsis since several fests. With 2 rounds and cutthroat competition, three teams will solve the mystery and emerge winners. The event is based on forensics, crime and deduction.",
        "Wall Street Business Challenge":"A distinctive case competition that tests your analytical and creative skillsets as well as your business acumen. This thrilling case study challenge is an excellent chance for budding business leaders to prove their entrepreneurial acumen and develop their strategic skill set.",
        "Operation Zodiac":"Operation Zodiac-Time-Travelling Serial Killer; has commited 4 Murders across the timeline. This has damaged the Space-Time Continuum. You need to find the Timelines of the Murder, Identity of the Victim and Undo it as well as the reveal the Identity of the Killer.",
        "Bid Up Vamps":"This event is about buying data structures by auction mechanism and solving the challenging questions within a given timeframe by using that particular data structure only.",
    }
    const workshops ={
        "MACHINE LEARNING WORKSHOPS":"Machine learning is a type of artificial intelligence (AI) that provides computers with the ability to learn without being explicitly programmed. Machine learning focuses on the development of computer programs that can change when exposed to new data",
        "STAR GAZING":"To give the General Body a peak into the night sky, and a closer look at the stars and other celestial objects.",
        "FINDING,CLASSIFYING AND ANALYSING EXOPLANETS USING PYTHON: AN EXTENSIVE WORKSHOP":"Somebody participating in this workshop will know Python3 code, handling (slicing, extending, manipulating) databases, widely useful and relevant python3 libraries like matplotlib, pandas, numpy; basic clustering techniques which are a foundation for many AI/ML techniques",
        "ROBOTICS 101":"ARC-Robotics 101 is a three-day technical workshop conducted by the Automation and Robotics Club. The workshop is based on a physical hands-on kit and has zero prerequisites. The participants will be exposed to the fundamentals of programming, electronics, and design, which make up the foundation of robotics.",
        "PM WORKSHOP":"A must attend workshop for anyone planning to pursue PM as a career option. It will lay out all requirements for the field, teach fundamentals of the same and choke out a future plan and scope.",
        "CRIME SCENE INVESTIGATION":"A workshop on Crime Scene Investigation",
        "IOT WORKSHOP":"A 2-day hands-on experience workshop on IOT, with takeaway kits included. Participants will be able to work on various projects that involve real world iot applications.",
        "HYBRID VEHICLE WORKSHOP":"The objective of the workshop is to enhance one’s knowhow about how an Internal Combustion engine works. The attendee will get to know about the intricacies and details involved in the operation of an engine and its components. The dismantling and the associated assembly of the engine will enable the attendee to observe the mechanisms working inside.",
        "BLOCKCHAIN WORKSHOP":"n recent years, blockchain technology has taken over the world, introducing a vast number of cryptocurrencies into the market to choose for investment. In our talk on the “Fundamentals of Cryptocurrency,” BlockSoc brings you a detailed workshop on differentiating between cryptocurrencies with true potential and deceptive ones",
        "ANALYTICS WORKSHOP":"Business analytics is about giving insights that can facilitate strategic decisions and actions that improve the overall performance of the business.",
    }


    const [title_names, setTitle] = useState("")
    const [description, setDescript] = useState("")
    const [register, setReg] = useState(false)
    useEffect(()=>{
        if (params.type=="comp"){
            Object.keys(competions).forEach((value,i)=>{
                if (i==params.id){
                    setTitle(value)
                    setDescript(competions[value])
                    
                    
                }
            })
        }
        else if(params.type=="work"){
            Object.keys(workshops).forEach((value,i)=>{
            if (i==params.id){
                setTitle(value)
                setDescript(workshops[value])

                
                const title = document.getElementById("contest-page-title");
    
                var numWords = value.split(' ').length; 

                if (numWords > 2) {
                    title.style.fontSize = "6.8vh";
                }
                if (numWords > 5) {
                    title.style.fontSize = "3.8vh";
                }
            }
        })}

        setReg(true)
    },[])



    return (

    <div className='background'>
        <div className='contest_image'></div>
        <div className='content-left content-full'>
            <div 
                className='photo' 
                style={{ 
                    backgroundImage: `url(${(params.type=="comp" ? competionsImages[params.id] : workshopsImages[params.id])})`
                }}
            >
            </div>
            <div className='prize'>
                <div className='prize-text'>{prize}</div>
            </div>
            <div className='buttons-menu'>
            {register && <div className='button-view'>
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
                {/* {(params.type=="comp") && Object.keys(competions).map((value,i)=>{
                    console.log(competions)
                    if (i==params.id) {
                        return(value)
                    }
                })} */}
                {title_names}
            </div>
            <div className='contest-description'>
                {description}
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
