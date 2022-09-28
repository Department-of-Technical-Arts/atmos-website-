import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./landing.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Standout from "../standout/standout";

function Landing() {
  const navigate = useNavigate();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  var count = 1;
  const elementRef = useRef(null);
  const [leaving, setLeaving] = useState(true);

  useEffect(() => {
    const handleScroll = async (e) => {
      const height = elementRef.current?.scrollHeight;
      const vhPixels = height * 0.72;

      const smoothScroll = (h) => {
        let i = h || 0;
        if (i < height) {
          setTimeout(() => {
            window.scrollTo(0, i);
            smoothScroll(i + 10);
          }, 10);
        }
      };

      console.log("window.scrollY", window.scrollY);
      console.log(height);
      console.log(vhPixels);
      console.log(elementRef.current?.scrollHeight);
      //console.log(divElement.offsetHeight);

      while (window.scrollY > vhPixels && count > 0) {
        count = 0;
        console.log("fire");
        console.log(height);
        smoothScroll(window.scrollY);
        /*window.scrollTo({
          top: height,
          behavior: "smooth",
        });*/
        {
          await delay(500);
          setLeaving(false);
          await delay(500);
          navigate("/explore");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {leaving ? (
        <div className="landing-container" ref={elementRef}>
          <div className="background-container">
            <div className="bg">
              <div className="image-landing"></div>
              <div className="content">
                <h1 className="landing-title">ATMOS</h1>
              </div>
            </div>
            {/*<Button component={RouterLink} to="/explore" sx={{margin:"500px"}}>Click me</Button>*/}
            {/*<a href="/explore" className="landing-btn">
          <IoIosArrowDropdownCircle color="white" size="38" />
  </a>*/}
          </div>
          <Standout />
        </div>
      ) : (
        <>
          <div className="image-landing1"></div>
        </>
      )}
    </>
  );
}

export default Landing;
