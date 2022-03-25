import { NavLink, useHistory } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const history = useHistory();
  function routeHome() {
    history.push("/");
  }
  return (
    <div className="nav-container">
      <div className="nav-content">
        <img
          className="nav-home"
          src="/navHome.png"
          alt=""
          onClick={routeHome}
        />
        <NavLink
          to="/medical"
          activeStyle={{
            fontWeight: "bold",
            color: "#0DADEA",
          }}
        >
          의료기관 찾기
        </NavLink>
        <NavLink
          to="/medicine"
          activeStyle={{
            fontWeight: "bold",
            color: "#0DADEA",
          }}
        >
          의약품 조회
        </NavLink>
        <NavLink
          to="/disease"
          activeStyle={{
            fontWeight: "bold",
            color: "#0DADEA",
          }}
        >
          질병 찾기
        </NavLink>
        <NavLink
          to="/covid"
          activeStyle={{
            fontWeight: "bold",
            color: "#0DADEA",
          }}
        >
          코로나19
        </NavLink>
      </div>
      <div className="nav-bottom"></div>
    </div>
  );
}
