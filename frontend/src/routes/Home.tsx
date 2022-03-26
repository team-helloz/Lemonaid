// React
import { useState } from "react";
// Route
import { useHistory } from "react-router-dom";
// Components
import HomeScroll from "../components/Home/HomeScroll";
import SlideWidget from "../components/Home/SlideWidget";
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
        <p className="team-logo">Lemonaid.</p>
        <p className="team">ⓒ SSAFY 6th - 안녕즈</p>
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
