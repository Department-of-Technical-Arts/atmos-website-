import React from 'react';
import './Contest.css';


function Contest({title = "CONTEST", desc = "Participants are invited to the battle of coding. Test your programming and algorithmic skills while competing with the world's best programmers solving the intense and innovative competition coding problems.", prize = "INR 10,000 PRIZE"}) {
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
            <div className='title'>
                {title}
            </div>
            <div className='description'>
                {desc}
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
