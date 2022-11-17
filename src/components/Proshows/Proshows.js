import { React, useEffect } from "react";
import "./Proshows.css";
import proshowsImages from "../../images/events-photos/proshows-images";
import currProshowsImages from "../../images/events-photos/currproshows-images";
import CurrentProshows from "../../CurrentProshow/Currentproshow";


class Proshow {
  
  constructor(name, date, link, image){
    this.name = name;
    this.date = date;
    this.link = link;
    this.image = image;
  }

}

const proshows = [
  new Proshow("Anand Bhaskar Collective", "27 NOV", "https://www.instagram.com/p/ClDzUtXND4c/", currProshowsImages[0]),
  new Proshow("Arjun Kanungo", "27 NOV", "https://www.instagram.com/p/Ck3qZFlhHXp/", currProshowsImages[1]),
  new Proshow("Samay Raina", "25 NOV", "https://www.instagram.com/p/ClETWDdN3LW/", currProshowsImages[2])
];

const Proshows = () => {
  const currProShowsNames = [
    "Anand Bhaskar Collective",
    "Arjun Kanungo",
    
    "Samay Raina"
  ];
  const proShowsNames = [
    "Armaan Malik",
    "Nishant Suri",
    "Danny Avila",
    "Aerreo",
    "Sanam",
    "Vivek Singh",
    "Pineapple Express",
  ];
  const proshowDates = ["27 NOV", "27 NOV", "25 NOV"]
  const proshowLinks = [
    "https://www.instagram.com/p/ClDzUtXND4c/",
    "https://www.instagram.com/p/Ck3qZFlhHXp/", 
    
    "https://www.instagram.com/p/ClETWDdN3LW/"
  ]
  
  useEffect(() => {
    document.title = "PROSHOWS - ATMOS";
  }, []);

  return (
    <div>
      <div className="background-container-proshows">
        <div className="background-proshows">
          <div className="image-proshows"></div>
          <div className="content-proshows">
            <h1>PROSHOWS</h1>
          </div>
          <div className="card-container-proshows">
          <h4 className="proshows-heading">ATMOS '22 PROSHOWS</h4>
            <div className="prev-proshows">
              {Object.values(currProShowsNames).map((value, i) => {
                const currPro = proshows[i]
                return (
                  <a href={currPro.link} key={i}>
                    <div key={i}
                    onMouseEnter={ (e) => {
                      e.preventDefault();
                      document.getElementById(`titles_${i}`).hidden = false;
                    }}
        
                    onMouseLeave={(e)=>{
                      document.getElementById(`titles_${i}`).hidden = true;
                    }} 
                      className="hover-cards-proshows"
                      style={{
                        backgroundImage: `url(${currPro.image})`,
                      }}
                    >
                      <div hidden id={`titles_${i}`} className="date">{currPro.date}</div>
                      <p>{currPro.name}</p>
                      
                    </div>
                  </a>
                );
              })}
            </div>
            <h4 className="proshows-heading">PREVIOUS PROSHOWS</h4>
            <div className="prev-proshows">
              {Object.values(proShowsNames).map((value, i) => {
                return (
                  <a href="/gallery">
                    <div
                      className="hover-cards-proshows"
                      style={{
                        backgroundImage: `url(${proshowsImages[i]})`,
                      }}
                    >
                      <p>{value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proshows;
