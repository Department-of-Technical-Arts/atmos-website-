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
      <div className="background-container-gallery">
        <div className="background-gallery">
          <div className="image-gallery"></div>
          <div className="content-gallery">
            <h1 className="gallery-title">GALLERY</h1>
          </div>
          <div className="gallery-grid">
            <Imagegrid />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
