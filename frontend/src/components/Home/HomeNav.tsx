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
    const Burger = document.getElementById("burger")
    if (isNav) {
      Burger?.classList.add("h-nav-open-burger")
      HomeNav?.classList.add("open")
    } else {
      Burger?.classList.remove("h-nav-open-burger")
      HomeNav?.classList.remove("open")
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
    </div>
  );
}