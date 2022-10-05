import React, { useState, useEffect } from "react";
import "./eventSlider.css";
import competionsImages from '../../images/events-photos/competions-images';
import talksImages from '../../images/events-photos/talks-images';
import proshowsImages from '../../images/events-photos/proshows-images';
import workshopsImages from '../../images/events-photos/workshops-images';

export default function EventSlider({type}) {
  const [images, setImage] = useState([])
  useEffect(() => {
    if (type=="comp"){
      setImage(competionsImages)
    }
    else if (type=="talk"){
      setImage(talksImages)
    }
    else if(type=="proshow"){
      setImage(proshowsImages)
    }
    else if(type=="work"){
      setImage(workshopsImages)
    }
  }, []);
  return (
    <div class="image-slider">
      <div class="image-slider-track">
        {Object.values(images).map((value,i)=>{
          return(<div class="slide-standout" style={{ 
            backgroundImage: `url(${images[i]})`
          }}>
          {/* <img style={{borderRadius:10}} src={value} /> */}
        </div>)
        })}
        {/* <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>

        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>

        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>

        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div>
        <div class="slide-standout">
          <img style={{borderRadius:10}} src={require("./i1-min.jpeg")} />
        </div> */}
      </div>
    </div>
  );
}
