import { NavLink } from "react-router-dom";
import { SidebarData } from "./sidebarData";

function Sidebar() {
  return (
    <>
      <div className="SideNav">
        <h1 className="navTitle">Components</h1>
        <ul className="list-group">
          {SidebarData.map((val, key) => {
            return (
              <NavLink
                to={val.link}
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "#fff",
                        background: "#7600dc",
                      }
                    : { color: "#545e6f" }
                }
              >
                <li key={key} onClick={() => {}}>
                  {val.title}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </>
  );
}
//onClick={() => (window.location.pathname = val.link)}
export default Sidebar;
