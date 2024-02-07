import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./components/Pages/homepage";
import Mainpage from "./components/Pages/mainpage";
import ComError from "./components/Pages/ComError";
import OXDcomponets from "./components/Pages/oxdcomponets";
import OxdDropdown from "./components/Dropdown";
import OxdRadio from "./components/Pages/Radio/oxdradio";
import TextBox from "./components/Pages/Textbox";
import OxdButtons from "./components/Pages/Buttons";
import "./components/Pages/css/componetspage.css";
import "./App.css";
import ComGrid from "./components/Pages/comgrid";

function App() {
  return (
    <Router>
      <div className="topNaveBar">
        <nav>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#000" : "#f0f0f0",
            })}
          >
            Explore
          </NavLink>
          <NavLink
            to="/mainpage"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#000" : "#f0f0f0",
            })}
          >
            Mainpage
          </NavLink>
          <NavLink
            to="/oxdcomponets"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#000" : "#f0f0f0",
            })}
          >
            Components
          </NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/oxdcomponets" element={<OXDcomponets />}>
          <Route path="/oxdcomponets" element={<ComGrid />} />
          <Route path="radio" element={<OxdRadio />} />
          <Route path="textbox" element={<TextBox />} />
          <Route path="dropdown" element={<OxdDropdown />} />
          <Route path="mainpage" element={<Mainpage />} />
          <Route path="buttons" element={<OxdButtons />} />
          <Route path="*" element={<ComError />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
// <div className="App">
//   <Routes>
//     <Route
//       path="/"
//       element={<HomePage />}
//       errorElement={<ErrorPage />}
//     ></Route>
//     <Route path="/mainpage" element={<Mainpage />}></Route>
//     <Route path="/oxdcomponets" element={<OXDcomponets />}>
//       <Route path="../Dropdown" element={<OxdDropdown />}></Route>
//       <Route path="../Radio" element={<OxdRadio />}></Route>
//     </Route>
//   </Routes>
// </div>

//<Route path="/" element={<Mainpage></Mainpage>}></Route>
//import OxdDropdown from "./components/Dropdown";
//import OxdRadio from "./components/Radio";

//<Route path="../Dropdown" element={<OxdDropdown />}></Route>
//<Route path="../Radio" element={<OxdRadio />}></Route>
