import React, { useState, useEffect } from "react";
import "./EventSlider.css";
import { useNavigate } from "react-router-dom";
import { urlEndpoint } from "../../config";

const EventSlider = ({ type, data }) => {
 
  const navigate = useNavigate();

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
          if (value.IMAGEURL)
          return (
            <a href={`/contest/${type}/${value.NAME}`} key={i} >
            <div 
            className="slide-standout" 
            style={{ 
              backgroundImage: `url(${urlEndpoint}${value.IMAGEURL})`
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
                backgroundImage: `url(${urlEndpoint}${data.IMAGEURL})`
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
                backgroundImage: `url(${urlEndpoint}${value.IMAGEURL})`
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