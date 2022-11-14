import { React, useEffect } from "react";
import "./Proshows.css";
import proshowsImages from "../../images/events-photos/proshows-images";
import currProshowsImages from "../../images/events-photos/currproshows-images";
import CurrentProshows from "../../CurrentProshow/Currentproshow";

const Proshows = () => {
  const currProShowsNames = [
    "Arjun Kanungo",
    
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
  const proshowDates = ["27 NOV"]
  const proshowLinks = ["https://www.instagram.com/p/Ck8U7YRv05l/?igshid=YmMyMTA2M2Y="]
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
                return (
                  <a onMouseEnter={ (e) => {
                    e.preventDefault();
                    document.getElementById(`titles_${i}`).hidden = false;
                  }}
      
                  onMouseLeave={(e)=>{
                    document.getElementById(`titles_${i}`).hidden = true;
                  }} href={proshowLinks[i]}>
                    <div
                      className="hover-cards-proshows"
                      style={{
                        backgroundImage: `url(${currProshowsImages[i]})`,
                      }}
                    >
                      <div hidden id={`titles_${i}`} className="date">{proshowDates[i]}</div>
                      <p>{value}</p>
                      
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
