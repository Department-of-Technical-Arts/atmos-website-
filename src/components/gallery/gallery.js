import React from "react";
import "./gallery.css";
import Imagegrid from "./imagegrid";

function Gallery() {
  return (
    <>
      <div className="background-container-gallery">
        <div className="background-gallery">
          <div className="image-gallery"></div>
          <div className="content-gallery">
            <h1 className="gallery-title">GALLERY</h1>
          </div>
          <Imagegrid />
        </div>
      </div>
    </>
  );
}

export default Gallery;
