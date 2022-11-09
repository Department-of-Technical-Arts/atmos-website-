import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import Standout from "../Standout/Standout";
import { useScroll } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  var count = 1;
  const elementRef = useRef(null);
  const [leaving, setLeaving] = useState(true);
  const [scrolling, setScrolling] = useState(true);
  const { scrollYProgress } = useScroll();
  let isMobile = window.matchMedia("(max-width: 480px)");
  let isTouch = window.matchMedia("(max-width: 1024px)");

  useEffect(() => {
    const handleScroll = async (e) => {
      const height = elementRef.current?.scrollHeight;
      var limit = 0.65;
      isMobile ? (limit = 0.7) : (limit = 0.65);
      setScrolling(false);
      const smoothScroll = (h) => {
        let i = h || 0;
        if (i < height) {
          setTimeout(() => {
            window.scrollTo(0, i);
            smoothScroll(i + 10);
          }, 10);
        }
      };
      while (scrollYProgress.current > limit && count > 0) {
        count = 0;
        window.scrollTo({
          top: height,
          behavior: "smooth",
        });
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
    <div>
      {leaving ? (
        <div className="landing-container" ref={elementRef}>
          <div className="background-container">
            <div className="bg"></div>
            <h1 className="landing-title">ATMOS</h1>
            <h4 className="dates">25-27 November</h4>
            {scrolling && (
              <p className="scroll-text">
                {isTouch.matches ? "SWIPE UP" : "SCROLL DOWN"}
              </p>
            )}
          </div>
          <Standout />
        </div>
      ) : (
        <div>
          <div className="image-landing1"></div>
        </div>
      )}
    </div>
  );
}

export default Landing;
