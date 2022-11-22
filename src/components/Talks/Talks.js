import React from "react";
import "./Talks.css";
import talksImages from "../../images/events-photos/talks-images2";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { urlEndpoint } from "../../config";

function Talks() {
  const { talks } = useSelector((state) => state.displayData);
  let talksNames = [
    "Nidhi Narwal",
    "Kiran Bedi",
    "Bharat Karnad",
    "Warina Hussain",
    "Dr V Anantha Nageswaran",
    "Arun Prabhudesai",
    "Arvind Goel",
    "Dr. Ravindra Guptha",
  ];
  useEffect(() => {
    document.title = "TALKS - ATMOS";
  }, []);

  return (
    <div>
      <div className="background-container-talks">
        <div className="background-talks">
          <div className="image-talks"></div>
          <div className="content-talks">
            <h1>TALKS</h1>
          </div>
          <div className="talks-container">
            <h4 className="talks-heading">CURRENT SPEAKERS</h4>
            <div className="card-container-talks">
              {talks.map((eachTalk) => {
                if (eachTalk.IMAGEURL)
                  return (
                    <a href={eachTalk.LINK}>
                    <div
                      key={eachTalk.NAME}
                      className="hover-cards-talks"
                      style={{
                        backgroundImage: `url(${urlEndpoint}${eachTalk.IMAGEURL})`,
                      }}
                    >
                      <p>{eachTalk.NAME}</p>
                    </div>
                    </a>
                  );
              })}
            </div>
            <h4 className="talks-heading">PREVIOUS SPEAKERS</h4>
            {
              <div className="prev-talks">
                {talksNames.map((prevTalk, index) => {
                  return (
                    <a>
                    <div
                      key={prevTalk}
                      className="hover-cards-talks"
                      style={{
                        backgroundImage: `url(${talksImages[index]})`,
                      }}
                    >
                      <p>{prevTalk}</p>
                    </div></a>
                  );
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talks;
