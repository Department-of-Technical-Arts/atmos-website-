import './Contest.css';
import React from 'react';

const P404page = () => {
    return (
        <div className='contest_image'>
            
            <h1 style={{marginTop: '200px', color: 'white', zIndex: 10}}>OOPS</h1><br />
            <h4 style={{marginTop: '100px', color: 'white', mixBlendMode: 'difference'}}>You ended up at an invalid page.</h4>
            <h4><a href='/'>Redirect to main page</a></h4>
        </div>
    );
}

export default P404page;
