import React from "react";
import "./Imagegrid.css";
import imagesData from "./ImagesList";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Imagegrid = () => {
  const imageCard = imagesData.map((item) => {
    const i = imagesData.indexOf(item);
    return (
      <div className={`w-2 ${i % 2 === 0 ? "h-2" : "h-3"} `}>
        <div class="gallery-item">
          <div class="image-gallery-grid">
          <LazyLoadImage src={require(`${item}`)} width={330} height={300} /> 
          </div>
        </div>
      </div>
    );
  });
  
  return <div className="container-grid">{imageCard}</div>;
}

export default Imagegrid;
