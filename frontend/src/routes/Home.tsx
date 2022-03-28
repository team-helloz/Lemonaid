// Route
import { useHistory } from "react-router-dom";
// Components
import HomeScroll from "../components/Home/HomeScroll";
import SlideWidget from "../components/Home/SlideWidget";
import HomeNav from "../components/Home/HomeNav";
// Style
import "./Home.css"

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

  return (
    <div
      className="home-page"
    >
      <div className="h-main">
        <SlideWidget />
        <div className="logo-container">
          <p className="team-logo">Lemonaid.</p>
          <p className="logo-description">내 건강을 위한 의료 정보 플랫폼</p>
          <p className="logo-description">-모두의 안녕을 바라는 사람들 안녕즈-</p>
        </div>
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
