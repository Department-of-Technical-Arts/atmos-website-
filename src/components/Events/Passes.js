import {React, useEffect} from 'react' ;
import "./Events.css"
import { useMediaQuery } from '@mui/material';
const Passes = () => {
    const isMobile = useMediaQuery('(max-width: 500px)','(max-height: 480px)');
    const passes = [
        {
            name:"1 DAY PASS & SUNDAY MUSIC NIGHT PASS",
            link:"https://unstop.com/p/fest-sunday-music-night-pass-27th-nov-during-atmos-22-atmos-22-birla-institute-of-technology-and-sciences-bits-pilani--509931",
            image:"/events-photos/passes.png",
            price:"₹ 899"
        },
        {
            name:"1 day pass & COMEDY NIGHT PASS",
            link:"https://unstop.com/p/friday25th-nov-night-pass-for-atmos-atmos-22-birla-institute-of-technology-and-sciences-bits-pilani-hyderabad-campus-509871",
            image:"/events-photos/passes.png",
            price:"₹ 399"
        },
        {
            name:"SUNDAY MUSIC NIGHT PASS",
            link:"https://unstop.com/p/music-night-day-pass-birla-institute-of-technology-and-sciences-bits-pilani-hyderabad-campus-496362",
            image:"/events-photos/passes.png",
            price:"₹ 699"
        },
        {
            name:"MEGA - 3 DAY PASS & ALL SHOWS & ACCOMMODATION",
            link:"https://unstop.com/o/kIAztlN?lb=2df9UZu",
            image:"/events-photos/passes.png",
            price:"₹ 1999"
        },
        {
            name:"1 DAY PASS & SUNDAY NIGHT & 1 DAY ACCOMMODATION",
            link:"https://unstop.com/p/fest-sunday-music-night-1-day-accommodation-during-atmos-22-atmos-22-birla-institute-of-technology-and-sciences-bits-p-509939",
            image:"/events-photos/passes.png",
            price:"₹ 999"
        },
        {
            name:"1 DAY PASS & COMEDY NIGHT & 1 DAY ACCOMMODATION",
            link:"https://unstop.com/p/fest-friday1-day-accommodation-for-atmos-22-atmos-22-birla-institute-of-technology-and-sciences-bits-pilani-hyderabad--509938",
            image:"/events-photos/passes.png",
            price:"₹ 899"
        },
        {
            name:"COMEDY NIGHT PASS",
            link:"https://unstop.com/p/friday25th-nov-night-pass-for-atmos-atmos-22-birla-institute-of-technology-and-sciences-bits-pilani-hyderabad-campus-509871",
            image:"/events-photos/passes.png",
            price:"₹ 399"
        },
        {
            name:"One Day ENTRY Pass",
            link:"https://unstop.com/creative-cultural-event/atmos-22-day-pass-atmos-22-birla-institute-of-technology-and-sciences-bits-pilani-hyderabad-camp-496333",
            image:"/events-photos/passes.png",
            price:"₹ 199"
        },
        {
            name:"3 DAY ENTRY PASS",
            link:"https://unstop.com/p/3-day-pass-atmos-22-birla-institute-of-technology-and-sciences-bits-pilani-hyderabad-campus-509868",
            image:"/events-photos/passes.png",
            price:"₹ 399"
        },
        {
            name:"One Day Accommodation",
            link:"https://unstop.com/p/accommodation-for-1-day-at-bits-hyderabad-birla-institute-of-technology-and-sciences-bits-pilani-hyderabad-campus-509862",
            image:"/events-photos/passes.png",
            price:"₹ 199"
        },
        {
            name:"3 DAY Accommodation",
            link:"https://unstop.com/p/accommodation-for-3-days-at-bits-hyd-campus-during-atmos-atmos-22-birla-institute-of-technology-and-sciences-bits-pila-509859",
            image:"/events-photos/passes.png",
            price:"₹ 399"
        },
        
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