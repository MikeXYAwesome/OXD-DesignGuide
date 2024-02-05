import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./css/stylehomepage.css";
import SplineScene from "../Splinetest";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="homeContainer">
        <div className="flexCard1">
          <div>OXD Design System</div>
          <Link to="/mainpage">MainPage</Link>
        </div>
        <div className="flexCard2" data-aos="fade-up">
          Design Philosophy
        </div>
        <div className="flexCard3" data-aos="fade-up">
          OXD Interaction Module
        </div>
        <div className="flexCard4" data-aos="fade-up">
          Figma UI Library
        </div>
        <div className="flexCard4" data-aos="fade-up">
          User Exprince Standards
        </div>
        <div className="flexCard3" data-aos="fade-up">
          Made By OXD
        </div>
        <div className="flexCard5" data-aos="fade-up">
          UI Components
        </div>
        <div className="flexCard6" data-aos="fade-up">
          OXD Iconography
        </div>
        <div className="flexCard3" data-aos="fade-up">
          QA Guide
        </div>
        <div className="flexCard7" data-aos="fade-up">
          OXD Widgets
        </div>
      </div>
      <div className="homepagewrap">
        <div className="main-footer">
          <SplineScene></SplineScene>
        </div>
      </div>
    </>
  );
}

export default HomePage;
