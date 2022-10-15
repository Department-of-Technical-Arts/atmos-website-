import React, { useState, useEffect } from "react";
import "./eventSlider.css";
import competionsImages from "../../images/events-photos/competions-images";
import talksImages from "../../images/events-photos/talks-images";
import talksImages1 from "../../images/events-photos/talks-images1";
import proshowsImages from "../../images/events-photos/proshows-images";
import workshopsImages from "../../images/events-photos/workshops-images";
import { useNavigate } from "react-router-dom";

export default function EventSlider({ type }) {
  const competionsNames = ["IDRL","The Genesis","ProdStorm","CaseSensitive","Courtroom","Mech Meverick","Robowars","Law Follower","Anatomy Of Murder","Wall Street Business Challenge","Operation Zodiac","Bid Up Vamps"]
  const workshopNames = ["MACHINE LEARNING WORKSHOPS","STAR GAZING","ANALYSING EXOPLANETS USING PYTHON","ROBOTICS 101","PM WORKSHOP","CRIME SCENE INVESTIGATION","IOT WORKSHOP","HYBRID VEHICLE WORKSHOP","BLOCKCHAIN WORKSHOP","ANALYTICS WORKSHOP"]
  const talksNames = ["Nidhi Narwal","Kiran Bedi","Bharat Karnad","Warina Hussain","Nidhi Narwal","Kiran Bedi","Bharat Karnad","Warina Hussain"]
  const talksNames1 = ["Dr V Anantha Nageswaran","Arun Prabhudesai","Arvind Goel","Dr. Ravindra Guptha","Dr V Anantha Nageswaran","Arun Prabhudesai","Arvind Goel","Dr. Ravindra Guptha"]


  const [titleVisible, setTitleVisible] = useState([])
  const [currentSetting, setCurrentSetting] = useState([])
  const [images, setImage] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (type == "comp") {
      setImage(competionsImages);
      setCurrentSetting(competionsNames);
      let titles = []
      competionsNames.forEach((value,i) =>{
        titles.push(true);
      });
      console.log(titleVisible)
      setTitleVisible(titles);

    } else if (type == "talk") {
      setImage(talksImages);
      setCurrentSetting(talksNames);

      let titles = []
      talksNames.forEach((value,i) =>{
        titles.push(true);
      });
      setTitleVisible(titles);
    } else if (type == "proshow") {
      setImage(talksImages1);
      setCurrentSetting(talksNames1);
      let titles = []
      talksNames1.forEach((value,i) =>{
        titles.push(true);
      });
      setTitleVisible(titles);
    } else if (type == "work") {
      setImage(workshopsImages);
      setCurrentSetting(workshopNames);
      let titles = []
      workshopNames.forEach((value,i) =>{
        titles.push(true);
      });
      setTitleVisible(titles);
    }
  }, []);

  function imageClicked() {
    if (type == "comp") {
      navigate("/competitions");
    } else if (type == "talk") {
      navigate("/talks");
    } else if (type == "proshow") {
      navigate("/talks");
    } else if (type == "work") {
      navigate("/workshops");
    }
  }

  return (
    <div class="image-slider">
      <div class="image-slider-track">
        {Object.values(images).map((value, i) => {
          return (
            <div class="slide-standout" style={{ 
              backgroundImage: `url(${images[i]})`
            }} onClick={imageClicked} onMouseEnter={ (e) => {
              e.preventDefault();
              
              
              document.getElementById(`titles_${i}${type}`).hidden = false;
            }}
            onMouseLeave={(e)=>{
              document.getElementById(`titles_${i}${type}`).hidden = true;
            }}>
              {/* <img src={`${images[i]}`} /> */}
              <div class="hide" className="titles_slider" hidden id={`titles_${i}${type}`}>{currentSetting[i]}</div>
              {/* <div>{currentSetting[i]}</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
