import { React, useEffect }from 'react' ;
import "./Currentproshow.css";

const CurrentProshows = () => {
    const proShowsNames = ["Armaan Malik","Nishant Suri"]
    useEffect(() => {
        document.title = "PROSHOWS - ATMOS" 
    }, []);

    return(
        <div>
                <div className='container-current-proshows'>
                    <h1 className='header-current-proshow'> CURRENT PROSHOWS</h1>
                    <div className='card-container-current-proshows'>
                        {
                            <a href='https://unstop.com/p/music-night-day-pass-birla-institute-of-technology-and-sciences-bits-pilani-hyderabad-campus-496362'>
                                <div className='hover-cards-current-proshows'>
                                    <img className='artist-img' src="/events-photos/pro-show_cover.JPG" />
                                    <h2 className="artist-name">Armaan Malik</h2>
                                    <h3 className='artist-date'>26th November 2022</h3>
                                    <h3 className='artist-info'>lorem ipsum</h3>
                                </div></a>
                        }
                        {
                            <a href='https://unstop.com/creative-cultural-event/comedy-night-day-pass-atmos-22-birla-institute-of-technology-and-sciences-bits-pilani-hyderabad--496527'>
                                <div className='hover-cards-current-proshows'>
                                    <img className='artist-img' src="/events-photos/dannyavila_cover.jpg" />
                                    <h2 className="artist-name">Danny Avila</h2>
                                    <h3 className='artist-date'>27th November 2022</h3>
                                    <h3 className='artist-info'>lorem ipsum</h3>
                                </div></a>
                                
                        }
                        {
                            <a href='https://unstop.com/creative-cultural-event/comedy-night-day-pass-atmos-22-birla-institute-of-technology-and-sciences-bits-pilani-hyderabad--496527'>
                            <div className='hover-cards-current-proshows'>
                                <img className='artist-img' src="/events-photos/dannyavila_cover.jpg" />
                                <h2 className="artist-name">Danny Avila</h2>
                                <h3 className='artist-date'>27th November 2022</h3>
                                <h3 className='artist-info'>lorem ipsum</h3>
                            </div></a>
                        }
                        
                    </div>
                </div>
        </div>
    )
}

export default CurrentProshows;

