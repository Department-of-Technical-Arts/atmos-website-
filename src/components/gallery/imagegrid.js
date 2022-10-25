import React from "react";
import "./imagegrid.css";
import imagesData from "./imagesList";

function Imagegrid() {
  const imageCard = imagesData.map((item) => {
    const i = imagesData.indexOf(item);
    return (
      <div className={`gallery-container w-2 ${i % 2 === 0 ? "h-2" : "h-3"} `}>
        <div class="gallery-item">
          <div class="image-gallery-grid">
            <img src={item} alt="" />
          </div>
        </div>
      </div>
    );
  });

  return <div className="container-grid">{imageCard}</div>;
}

export default Imagegrid;
