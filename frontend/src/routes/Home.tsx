// Route
import { useHistory } from "react-router-dom";
// Components
import HomeScroll from "../components/Home/HomeScroll";
// Style
import "./Home.css"

export default function Home() {
  // 경로로 이동하는 함수
  const history = useHistory();

  function routeMedical() {
    // 해당 링크로 이동
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
    <div className="home-page">
      <div className="h-main">
        <h1>Lemonaid</h1>
      </div>

      <HomeScroll 
        routeMedical={routeMedical}
        routeMedicine={routeMedicine}
        routeDisease={routeDisease}
        routeCovid={routeCovid}
      />

      <div className="h-nav">
        <p
         onClick={routeMedical}
         className="cursor-pointer">의료기관</p>
        <p
         onClick={routeMedicine}
         className="cursor-pointer">의약품</p>
        <p
         onClick={routeDisease}
         className="cursor-pointer">증상</p>
        <p
         onClick={routeCovid}
         className="cursor-pointer">코로나</p>
      </div>
    </div>
  );
}
