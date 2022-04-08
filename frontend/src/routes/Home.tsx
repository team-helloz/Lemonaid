// Route
import { useHistory } from "react-router-dom";
// Components
import HomeScroll from "../components/Home/HomeScroll";
import SlideWidget from "../components/Home/SlideWidget";
import HomeNav from "../components/Home/HomeNav";
// SVG
import stethoscope from "../assets/home-img.svg"
// Style
import "./Home.css";

export default function Home() {
  const history = useHistory();

  // 해당 링크로 이동
  function routeMedical() {
    history.push("/medical");
  }
  function routeMedicine() {
    history.push("/medicine");
  }
  function routeDisease() {
    history.push("/disease");
  }
  function routeCovid() {
    history.push("/covid");
  }

  window.addEventListener("scroll", function() {
    const Mouse = this.document.getElementById("mouse")
    if (this.window.scrollY > 150) {
      Mouse?.classList.add("home-mouse-active")
      Mouse?.classList.add("home-mouse-none")
    } else {
      Mouse?.classList.remove("home-mouse-none")
      Mouse?.classList.remove("home-mouse-active")
    }
  })

  return (
    <div className="home-page">
      <div className="h-main">
        <SlideWidget />
        <div className="logo-container">
          <img className="team-logo" src="/Lemonaid.png" alt="" />
          <p className="logo-description">건강한 삶을 위한 의료 정보 플랫폼</p>
        </div>
        <img src={stethoscope} alt="" className="home-stethoscope" />
        <img src="./line.png" alt="" className="home-line"/>
        <p className="home-mouse">
          <span id="mouse"></span>
        </p>
        <p className="team">ⓒ SSAFY 6th - 안녕즈</p>
      </div>

      <HomeScroll
        routeMedical={routeMedical}
        routeMedicine={routeMedicine}
        routeDisease={routeDisease}
        routeCovid={routeCovid}
      />

      <HomeNav
        routeMedical={routeMedical}
        routeMedicine={routeMedicine}
        routeDisease={routeDisease}
        routeCovid={routeCovid}
      />
    </div>
  );
}
