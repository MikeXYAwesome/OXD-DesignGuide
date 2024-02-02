import { Link } from "react-router-dom";
import "./css/stylehomepage.css";
import SplineScene from "../Splinetest";

function HomePage() {
  return (
    <>
      <div className="homeContainer">
        <div className="flexCard1">OXD DESIGN SYSTEM</div>
        <div className="flexCard2">Design Phlocopy </div>
        <div className="flexCard3">3</div>
        <div className="flexCard4">4</div>
        <div className="flexCard5">5</div>
      </div>
      <div className="homepagewrap">
        <h1>HomePage</h1>
        <div>
          <SplineScene></SplineScene>
          <Link to="/mainpage">MainPage</Link>
        </div>
      </div>
    </>
  );
}

export default HomePage;
