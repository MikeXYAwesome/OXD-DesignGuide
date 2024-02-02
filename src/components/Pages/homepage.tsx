import { Link } from "react-router-dom";
import "./css/stylehomepage.css";

function HomePage() {
  return (
    <>
      <div className="homepagewrap">
        <h1>HomePage</h1>
        <h1>
          <div className="maincard"></div>
          <Link to="/mainpage">MainPage</Link>
          <a href="/mainpage">CLick me</a>
        </h1>
      </div>
    </>
  );
}

export default HomePage;
