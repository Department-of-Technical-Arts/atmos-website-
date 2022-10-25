import {React, useEffect} from "react";
import "./gallery.css";
import Imagegrid from "./imagegrid";

function Gallery() {
  
  
  useEffect(() => {
      document.title = "Gallery - ATMOS" 
      return () => {
          
      };
  }, []);

  return (
    <>
    <div className="background-image-sponsors"></div>
    <div className="content-gallery">
      <h1 className="gallery-title">GALLERY</h1>
    </div>
     <Imagegrid />
    </>
  );
}

export default Gallery;
