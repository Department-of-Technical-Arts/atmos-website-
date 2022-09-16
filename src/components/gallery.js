import React from "react";
import "../components/css/gallery.css";
import NavBar from "./Navbar/NavBar";

function Gallery(){
    return(
        <>
            <div className="background-container-gallery">
                <div className="background-gallery">
                    <NavBar />
                    <div className="content-gallery">
                        <h1>GALLERY</h1>
                    </div>
                    <div className="card-container-gallery">
                        <div className='hover-cards'></div>
                        <div className='hover-cards'></div>
                        <div className='hover-cards'></div>
                        <div className='hover-cards'></div>
                        <div className='hover-cards'></div>
                        <div className='hover-cards'></div>
                        <div className='hover-cards'></div>
                        <div className='hover-cards'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery;