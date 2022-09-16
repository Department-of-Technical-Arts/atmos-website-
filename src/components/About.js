import React from "react";
import "../components/css/gallery.css";
import NavBar from "./Navbar/NavBar";

function About(){
    return(
        <>
            <div className="background-container-gallery">
                <div className="background-gallery">
                    <NavBar />
                    <div className="content-gallery">
                        <h1>ABOUT US</h1>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default About;