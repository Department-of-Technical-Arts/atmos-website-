import React from 'react' ;
import "../components/css/landing.css"
import {IoIosArrowDropdownCircle} from 'react-icons/io';
import {Link,useNavigate} from "react-router-dom"
import {Button} from "@mui/material";

function Landing() {

    return(
        <>
            <div className='background-container'>
                <div className='bg'>
                    <div className='content'>
                        <h1>ATMOS</h1>
                    </div>
                </div>
                {/*<Button component={RouterLink} to="/explore" sx={{margin:"500px"}}>Click me</Button>*/}
                <a href="/explore" className='landing-btn'>
                    <IoIosArrowDropdownCircle color="white" size="38"/>
                </a>
            </div>
        </>
    )
}

export default Landing ;