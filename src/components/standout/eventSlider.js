import React, { useState, useEffect } from "react";
import "./EventSlider.css";
import CompetitionImages from "../../Data Files/Competitions.json"
import WorkshopImages from "../../Data Files/Workshops.json"
import { useNavigate } from "react-router-dom";

const EventSlider = ({ type, data }) => {

  const [images, setImages] = useState ([]) 
  const navigate = useNavigate();
  useEffect(() => {
    if (type == "competition") {
      setImages(CompetitionImages);
    } 
    else if (type == "talk") {
      
    } 
    else if (type == "prefest") {
      
    } 
    else if (type == "workshop") {
      setImages(WorkshopImages);
    }
  }, []);

  function imageClicked() {
     if (type == "talk") {
      navigate("/talks");
    } else if (type == "proshow") {
      navigate("/talks");
    }
  }

  return (
    <div className="image-slider">
      <div className="image-slider-track">
        {(type == "competition" || type == "workshop") && data.map((value, i) => {
          return (
            <a href={`/contest/${type}/${value.NAME}`} key={i} >
            <div 
            className="slide-standout" 
            style={{ 
              backgroundImage: `url(${images[i]})`
            }} 
            
            onMouseEnter={ (e) => {
              e.preventDefault();
              document.getElementById(`titles_${i}${type}`).hidden = false;
            }}

            onMouseLeave={(e)=>{
              document.getElementById(`titles_${i}${type}`).hidden = true;
            }}>
              <div className="hide titles_slider" hidden id={`titles_${i}${type}`}>{value.NAME}</div>
            </div></a>
          );
        })}
        {(type=="talk") && data.map((value, i) => {
            return (
              <div  key={i}
              className="slide-standout" 

              style={{ 
                backgroundImage: `url(${images[i]})`
              }} 

              onClick={imageClicked} 

              onMouseEnter={ (e) => {
                e.preventDefault();
                document.getElementById(`titles_${i}${type}`).hidden = false;
              }}

              onMouseLeave={(e)=>{
                document.getElementById(`titles_${i}${type}`).hidden = true;
              }}>
                <div className="hide titles_slider" hidden id={`titles_${i}${type}`}>{value.NAME}</div>
              </div>
            );
          })}
        {(type=="prefest") && data.map((value, i) => {
            return (
              <a href={`/contest/prefest/${i}`} key={i}>
              <div 
              className="slide-standout" 

              style={{ 
                backgroundImage: `url(${images[i]})`
              }} 

              onClick={imageClicked} 

              onMouseEnter={ (e) => {
                e.preventDefault();
                document.getElementById(`titles_${i}${type}`).hidden = false;
              }}

              onMouseLeave={(e)=>{
                document.getElementById(`titles_${i}${type}`).hidden = true;
              }}>
                <div className="hide titles_slider" hidden id={`titles_${i}${type}`}>{value.NAME}</div>
              </div></a>
            );
          })}
        
      </div>
    </div>
  );
}

export default EventSlider
