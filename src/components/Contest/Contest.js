import {React, useState, useEffect} from 'react';
import {  useParams, useSearchParams } from 'react-router-dom'
import './Contest.css';


function Contest({title = "CONTEST", desc = "Participants are invited to the battle of coding. Test your programming and algorithmic skills while competing with the world's best programmers solving the intense and innovative competition coding problems.", prize = "INR 10,000 PRIZE"}) 
{
    const params = useParams()

    const competions = {
        "SPES NOVO":"Earth is on the brink of apocalypse, you have been assigned a mission- SPES NOVO, a new hope for a new planet and a place to start life all over again. From exploration to survival, a lot can change, this space adventure by AD ASTRA succeeded in asserting it.",
        "Under Pressure":"Teams of 2 participated in the fun filled particle simulation game 'Under Pressure' featuring Wordle. This event brought to us by Association of Chemical Engineers tested one's ability to handle situations under pressure in a really innovative way.",
        "Nuclear Blues":"Participants of Nuclear Blues found themselves in the shoes of a company personnel hired to treat a river full of pollutants leaking from a mishap struck nuclear plant. This fun filled event brought an opportunity of showcasing basic math, bidding and trading skills for everyone",
        "CaseSensitive":" A business case competition where participants get a chance to try their hands on a real-life market-related case. It is conducted in three rounds spread across a week with nationwide participation from undergraduate and post-graduate universities",
        "GRAND PRIX MANIA":"The “Grand Prix Mania”, an event held by MEA of BPHC during Orbe Novo was a trivia contest based on Formula one. This quiz offered a perfect track for all the F1 enthusiasts to flaunt their expertise in all that is racing.",
        "ESCALADE":"The IEEE of BPHC hosted &quot;Escalade,&quot; a hackathon for programmers and electronics enthusiasts, during Orbe Novo. The major goal of the competition was to assess participants aptitude for problem-solving in order to construct effective communication networks and algorithms. The participants in this event were motivated to innovate and come up with original solutions.",
        "BEAM IT":"Popsicle sticks were utilised in “Beam It”, an event held by CEA of BPHC, to test the best of abilities offered by its participants. Popsicle sticks were used to construct bridges, and the winner was chosen based on how strong and durable the design was.",
        "CodeDash":"The main coding competition held by ATMOS is called CodeDash. The objective of this online programming competition is to encourage participants to use their understanding of algorithms and data structures to solve problems. The main coding event of ATMOS is called CodeDash. It is an online programming competition focused on algorithms and data structures that encourages competitors to use their skills to solve problems.",
        "ProdStorm":"To put an end to your summertime doldrums, PM Division@BHCG and Doremon Den are here. ProdStorm, our product case challenge at ATMOS, is a great way to learn about product management and develop your skills. To help you beat the dullness of the summer, PM Division@BHCG and Doremon Den are here. In ProdStorm, our product case challenge at ATMOS, you can learn more about product management and polish your talents.",
        "FASTEST FRONTEND FIRST":"Are you into web development and design? Test your knowledge in our competition, Fastest Frontend First. This is a two-round event consisting of coding in CSS, HTML and JS. The first round consists of replicating an image provided using CSS and the second round requires the contestants to replicate an entire page",
        "Sudostar":"Axiom surely challenged our wits and patience with this one. I am pretty sure you have heard of sudoku, these puzzles were based on sudoku but were surely different and far more interesting than the regular sudoku puzzles found in the newspapers.",
        "Techtainment":"This showcase of intriguing projects by ARC definitely fuelled our innovative instincts. Students built 7 projects ranging from a Nerf Turret to a ‘Useless Box’ under the guidance of mentors from ARC. The ideas and concepts behind these projects were explained. Techtainment was an excellent opportunity to explore the domain of robotics and for those who are interested in the same.",
        "Line Follower":"This competition organized by PHoEnix required the participants to build a line-follower bot and follow the track set in front of them. One’s experience and enthusiasm of using Raspberry Pi or Arduino were tested here. Their spatial skills were also put to test in order to navigate the course.",
        "Cubing ATMOSphere":"It is a speedcubing competition with about 10 events like 3×3,4×4, blindfolded etc .It will be conducted in collaboration with World Cubing Association (WCA). Sponsor can be a online cubing store(like cubelelo) .",
        "Wall Street Business Challenge":"A week-long business case study competition in which the participants are given real-life corporate problems and asked to present a solution in the form of slides. It has been the highest participation event of Orbe Novo with more than 800 registration. The prize money last time was 35K which we're expecting to increase to 45K to match with other competitions in academic circles"
    }
    const workshops ={
        "Smart Automobile Workshop":"A 2-day online workshop on smart vehicles with certification was offered by Team Vulcan and SAE. This program was intended to teach students about industrial workflow and how electric automobile components work, as well as how concepts are developed, designs are created, and manufacturing processes are carried out.",
        "Current Trends in pharmaceutical sciences":"Panacea, The Pharmacy Association at BITS Pilani Hyderabad presented it’s (NO) National Symposium, Current Trends in Pharmaceutical Sciences (CTPS), themed Recovery with Resilience, if you are interested in entering the pharmaceutical industry or have a talent for drug discovery or biomedical research in the future but do not know where to start.",
        "ROBOTICS BOOTCAMP":"A fun 3 Day Robotics Workshop was brought to us by the Automation and Robotics Club, BITS Pilani Hyderabad Campus this cultural-tech fest, Orbe Novo'22. With no prerequisites, featuring hands-on experience and a 5-in-1 kit.",
        "EXPERT ENCOUNTER":"MEA hosted Mr. Arvind Goel, MD & CEO at TATA Autocomp, speak at our keynote seminar, EXPERT ENCOUNTER, and share his extraordinary experiences with us. He has been an exemplary worldwide leader for 40 years in the Indian and Chinese automotive sectors.",
        "CRYPTOGRAPHY WORKSHOP":"For all the cybersecurity enthusiasts and curious people out there, Cryptography Workshop was hosted by the CSA, where they explained about all the skills and demonstrations needed, from scratch, to get into the world of exploits and vulnerabilities.",
        "3D Rendering Workshop":"SEDS, the aerospace club of BPHC held a 3D Rendering Workshop themed “Your Vision of Martian Society” during Orbe Novo. It gave a fascinating insight into the various facets of 3-D graphic design and piqued the learner’s curiosity.",
        "Quadcopter":"The Quadcopter work shop conducted by the Phoenix Association and Aeolus was an amazing opportunity for all the drone enthusiasts out there. You not only got to build this exciting quadcopter but also got to take it home. This was such a big hit ,that the organizers had to conduct a 2.0 version of it."
    
    }


    const [title_names, setTitle] = useState("")
    const [description, setDescript] = useState("")
    useEffect(()=>{
        if (params.type=="comp"){
        Object.keys(competions).forEach((value,i)=>{
            if (i==params.id){
                setTitle(value)
                setDescript(competions[value])
            }
        })}
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
            }
        })}
    },[])
    useEffect(()=>{
        const title = document.getElementById("contest-page-title");
    
        console.log(title)
        var numWords = title.textContent.split(' ').length; 
    
        if (numWords > 2) {
            title.style.fontSize = "6.8vh";
        }
    },[title])

    window.addEventListener('DOMContentLoaded', () => {
        const title = document.getElementById("contest-page-title");
    
        console.log(title)
        var numWords = title.text().split(' ').length; 
    
        if (numWords > 2) {
            title.style.fontSize = "6.8px";
        }
    });

    return (

    <div className='background'>
        <div className='contest_image'></div>
        <div className='content-left'>
            <div className='photo'>
            </div>
            <div className='prize'>
                <div className='prize-text'>{prize}</div>
            </div>
            <div className='buttons-menu'>
                <div className='button-view'>
                    <button className='button'>
                        REGISTER
                    </button>
                </div>
                <div className='button-view'>
                    <button className='button'>
                        EXPLORE
                    </button>
                </div>
            </div>
        </div>
        <div className='content-right'>
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
