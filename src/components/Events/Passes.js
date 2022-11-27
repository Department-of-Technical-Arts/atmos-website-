import {React, useEffect} from 'react' ;
import "./Events.css"
import { useMediaQuery } from '@mui/material';
const Passes = () => {
    const isMobile = useMediaQuery('(max-width: 500px)','(max-height: 480px)');
    const passes = [
        {
            name:"SUNDAY MUSIC NIGHT PASS",
            link:"https://www.townscript.com/e/sunday-night-pass-001444",
            image:"/events-photos/passes.png",
            price:"₹ 700"
        }
    ]
    useEffect(() => {
        document.title = "Events - ATMOS"
    }, []);

    return(
        <div>
            <div className='background-container-events'>
                <div className='background'>
                    <div className="image-events"></div>
                    <div className='content-events'>
                        <h1>PASSES</h1>
                    </div>
                    <div className='card-container' >
                        {passes.map((eachPass)=>{
                            return <a href={eachPass.link}><div className='hover-cards-passes' style={{ backgroundImage: `url(${eachPass.image})`}}><p className='passes-name' >{eachPass.name.toUpperCase()}</p><p className='passes-prize' >{eachPass.price.toUpperCase()}</p><p className='passes-buy' >{!isMobile ? <>CLICK</> : <>TAP</>} TO BUY</p></div></a>
                        })}
                       {/* <a href="/competitions"><div className='hover-cards-one' ><p>Competitions</p></div></a>
                       <a href="/workshops"><div className='hover-cards-two'><p>workshops</p></div></a>
                       <a href="/talks"> <div className='hover-cards-three'><p>talks</p></div></a>
                       <a href="/proshows"><div className='hover-cards-four'> <p>pro-shows</p></div></a>
                       <a href="/prefest"><div className='hover-cards-four' style={{ backgroundImage: `url("/events-photos/cubing-cover.jpeg")`}}> <p>pre-fest</p></div></a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Passes ;