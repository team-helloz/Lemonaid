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
            color: "#5EE6EB",
          }}
        >
          의료기관 찾기
        </NavLink>
        <NavLink
          to="/medicine"
          activeStyle={{
            fontWeight: "bold",
            color: "#5EE6EB",
          }}
        >
          의약품 조회
        </NavLink>
        <NavLink
          to="/disease"
          activeStyle={{
            fontWeight: "bold",
            color: "#5EE6EB",
          }}
        >
          질병 찾기
        </NavLink>
        <NavLink
          to="/covid"
          activeStyle={{
            fontWeight: "bold",
            color: "#5EE6EB",
          }}
        >
          코로나
        </NavLink>
      </div>
      <div className="nav-bottom"></div>
    </div>
  );
}
