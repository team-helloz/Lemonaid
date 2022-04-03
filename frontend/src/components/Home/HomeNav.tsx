// React
import { useState } from "react";
// Style
import "./HomeNav.css"

interface routeProps {
  routeMedical: () => void,
  routeMedicine: () => void,
  routeDisease: () => void,
  routeCovid: () => void
}

export default function HomeNav(props: routeProps) {

  const { routeMedical, routeMedicine, routeDisease, routeCovid } = props
  const [isNav, setNav] = useState<boolean>(false);

  function openNav() {
    setNav(!isNav)
    const HomeNav = document.getElementById("open")
    const Cover = document.getElementById("cover")
    if (isNav) {
      HomeNav?.classList.add("open")
      Cover?.classList.remove("h-nav-close")
    } else {
      HomeNav?.classList.remove("open")
      Cover?.classList.add("h-nav-close")
    }
  }

  return (
    <div className="h-nav" id="open">
      <div
        onClick={openNav}
        id="burger"
        className="h-nav-hamburger"
      >
        <div className="h-nav-line"></div>
        <div className="h-nav-line"></div>
        <div className="h-nav-line"></div>
      </div>
      <div className="h-nav-open">
        <p 
          className="h-nav-menu"
          onClick={routeMedical}>의료기관 조회</p>
        <p 
          className="h-nav-menu"
          onClick={routeMedicine}>의약품 조회</p>
        <p 
          className="h-nav-menu"
          onClick={routeDisease}>증상/질병 조회</p>
        <p 
          className="h-nav-menu"
          onClick={routeCovid}>코로나 정보 조회</p>
      </div>
      <div
        onClick={openNav}
        id="cover"
        className="h-nav-cover h-nav-close"
      ></div>
    </div>
  );
}