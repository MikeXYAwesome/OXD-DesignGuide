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
          <div>Design Philosophy</div>
          <Link to="/mainpage">lern whats behind</Link>
        </div>
        <div className="flexCard3" data-aos="fade-up">
          <div>OXD Interaction Module</div>
          <Link to="/mainpage">See The Guide</Link>
        </div>
        <div className="flexCard4" data-aos="fade-up">
          <div>Figma UI Library</div>
          <Link to="/mainpage">Go to File</Link>
        </div>
        <div className="flexCard4" data-aos="fade-up">
          <div>User Exprince Standards</div>
          <Link to="/mainpage">MainPage</Link>
        </div>
        <div className="flexCard3" data-aos="fade-up">
          <div>Made By OXD</div>
          <Link to="/mainpage">MainPage</Link>
        </div>
        <div className="flexCard5" data-aos="fade-up">
          <div>UI Components</div>
          <Link to="/oxdcomponets">MainPage</Link>
        </div>
        <div className="flexCard6" data-aos="fade-up">
          <div>OXD Iconography</div>
          <Link to="/mainpage">MainPage</Link>
        </div>
        <div className="flexCard3" data-aos="fade-up">
          <div>QA Guide</div>
          <Link to="/mainpage">MainPage</Link>
        </div>
        <div className="flexCard7" data-aos="fade-up">
          <div>OXD Widgets</div>
          <Link to="/mainpage">MainPage</Link>
        </div>

        <div className="OtherLinkCard">
          <div>OXD Exam</div>
          <div>OXD Cetifications</div>
          <div>OXD Widgets</div>
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
