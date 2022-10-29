import {React, useState, useEffect} from 'react';
import {  useParams, useSearchParams } from 'react-router-dom'
import { useMediaQuery } from '@mui/material';
import competionsImages from '../../images/events-photos/competions-images';
import prefestImages from '../../images/events-photos/prefest-images';
import workshopsImages from '../../images/events-photos/workshops-images';
import './Contest.css';


function Contest({title = "CONTEST", desc = "Participants are invited to the battle of coding. Test your programming and algorithmic skills while competing with the world's best programmers solving the intense and innovative competition coding problems.", prize = "INR 10,000 PRIZE"}) 
{
    const isTablet = useMediaQuery('(max-width:480px)','(max-height:1024px)');
    const isMobile = useMediaQuery('(max-width: 320px)','(max-height: 480px)');
    useEffect (() => {
        fetch("https://api.apispreadsheets.com/data/jhsed6mXPEZZBhk8/?query=delete from jhsed6mXPEZZBhk8 where NAME='Robowars'").then((res) => console.log(res.status))
    }, [])

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
        "t-RADICAL":"The event revolves around trading of electrons, protons and neutrons to neutralize the charges. The prerequisite knowledge is based completely on the charge of elements and compounds.",
        "INNOVATIVE NEXUS":"The event tries to inculcate the fun elements of chemistry into exciting games, with ode to the theme at hand for ATMOS. It consists of two rounds with the final round being more complex and is in closer relation to the futuristic ideas for further technological and scientific develpements.",
        "BINARY BATTLES":"Tournament style short form competitive coding competitions where contestants compete head to head. Participants will compete in teams of up to two members against each other in a bracket style tournament. Each round will consist of a short competitive coding lockout battle (around 3 questions) and the winner will move on in the bracket. Each battle will be 1 hour long and only the first team to solve a problem will get the points for it.", 
        "CRUXIPHER": "A CTF-style event utilizing knowledge of various computer science disciplines. Teams will compete to answer a series of questions categorized under various domains such as web development, cryptography, knowledge of open source utilities, etc. ", 
        "BITS PLANNING": "The whole planning needs to be done on AutoCAD. The existing plan of BPHC campus will be displayed throughout the competition and participation need to relocate the existing structures as per their preferences. They can also add some more structures such as Shops, parks , recreational centers etc. But all within the limit of the campus. They need to write a brief report on what changes they did stating their justifications for remapping and new additions (if any) stating its need and requirement.", 
        "GAME OF DRONES": "Design and build a wireless remote-controlled flying drone to complete the given tasks with highest points possible. There are two rounds and a BONUS round in the competition.", 
        "BITSAT 2.0":"If the name of the competition has caught your attention, then this event is definitely for you. No, there’s no Physics, Chemistry, or Math here. So relax. The original BITSAT is characterized by more questions and less time, and you should expect the same here; except this time, we shall be dealing with logical reasoning, problem solving, and mild coding. Do you need to know how to code to have a shot at this? It’s not a compulsion. We have way too many questions for you in the bank, so even if you can’t code, you’re most welcome to this competition.  Hoping that you do clear the cutoffs - that are not as likely not be as low as in 2021 - to get the highest paying return", 
        "CUBING ATMOSPHERE":"There are two kinds of people in this world- those who can solve the Rubik’s cube and those who cannot. If you pride yourself in your ability to solve this classic puzzle and its many fascinating variations, then Cubing ATMOSphere is the perfect platform to showcase your skills. Find your place as a speedcuber as you compete in various events with other talented contestants from across the country!",
         
    }
    const workshops ={
        "MACHINE LEARNING WORKSHOPS":"Machine learning is a type of artificial intelligence (AI) that provides computers with the ability to learn without being explicitly programmed. Machine learning focuses on the development of computer programs that can change when exposed to new data",
        "STAR GAZING":"To give the General Body a peak into the night sky, and a closer look at the stars and other celestial objects.",
        "FINDING,CLASSIFYING AND ANALYSING EXOPLANETS USING PYTHON: AN EXTENSIVE WORKSHOP":"Somebody participating in this workshop will know Python3 code, handling (slicing, extending, manipulating) databases, widely useful and relevant python3 libraries like matplotlib, pandas, numpy; basic clustering techniques which are a foundation for many AI/ML techniques",
        "ROBOTICS 101":"ARC-Robotics 101 is a three-day technical workshop conducted by the Automation and Robotics Club. The workshop is based on a physical hands-on kit and has zero prerequisites. The participants will be exposed to the fundamentals of programming, electronics, and design, which make up the foundation of robotics.",
        "PM WORKSHOP":"A must attend workshop for anyone planning to pursue PM as a career option. It will lay out all requirements for the field, teach fundamentals of the same and choke out a future plan and scope.",
        "CRIME SCENE INVESTIGATION":`A workshop on Crime Scene Investigation.
        Students will learn about the collection of evidence from the crime scene by solving real-life crime/ murder/theft scenes.
        Fingerprint collection and analysis.
        Lie detection test.
        Implementation of biology, Chemistry, and Physics at the crime scene.
        Data recovery`,
        "IOT WORKSHOP":"A 2-day hands-on experience workshop on IOT, with takeaway kits included. Participants will be able to work on various projects that involve real world iot applications.",
        "IC Engines Workshop":"The objective of the workshop is to enhance one’s knowhow about how an Internal Combustion engine works. The attendee will get to know about the intricacies and details involved in the operation of an engine and its components. The dismantling and the associated assembly of the engine will enable the attendee to observe the mechanisms working inside.",
        "Fundamentals of Cryptocurrency":"In recent years, blockchain technology has taken over the world, introducing a vast number of cryptocurrencies into the market to choose for investment. In our talk on the “Fundamentals of Cryptocurrency,” BlockSoc brings you a detailed workshop on differentiating between cryptocurrencies with true potential and deceptive ones",
        "ANALYTICS WORKSHOP":"Business analytics is about giving insights that can facilitate strategic decisions and actions that improve the overall performance of the business.",
        "SCIFARI":`Scifari - A literal Science Safari is your wild adventure into a show of the magic of the cosmos. You get to experience a theatrical depiction of a few of the most mind blowing phenomena blended with humor and drama. Join us in this musical show where we take over your imagination and give you an actual experience of the magic that Science is. You even get to have to try out an experiment or two on your own.        `,
    }

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
    }

    const [title_names, setTitle] = useState("")
    const [description, setDescript] = useState("")
    const [images, setImages] = useState([""])
    const [register, setReg] = useState(false)
    useEffect(()=>{
        if (params.type=="comp"){
            Object.keys(competions).forEach((value,i)=>{
                if (i==params.id){
                    setTitle(value)
                    setDescript(competions[value])
                    setImages(competionsImages)
                    
                }
            })
        }
        else if(params.type=="work"){
            Object.keys(workshops).forEach((value,i)=>{
            if (i==params.id){
                setTitle(value)
                setDescript(workshops[value])
                setImages(workshopsImages)
                
                const title = document.getElementById("contest-page-title");
    
                var numWords = value.split(' ').length; 

                if (numWords > 2) {
                    title.style.fontSize = "6.8vh";
                }
                if (numWords > 5) {
                    title.style.fontSize = "3.8vh";
                }
            }})}

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
    useEffect(()=>{
        document.title = title_names.toUpperCase() + " - ATMOS"
    },[title_names])



    return (

    <div className='background'>
        <div className='contest_image'></div>
        <div className='content-left content-full'>
            <div 
                className='photo' 
                style={{ 
                    backgroundImage: `url(${images[params.id]})`
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
