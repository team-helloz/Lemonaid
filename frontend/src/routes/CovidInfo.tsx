import NavBar from "../components/NavBar";
import "./CovidInfo.css";
import Footer from "../components/Footer";

import { CovidGenderChart } from "../components/Covid/CovidGenderChart";
import { CovidAgeChart } from "../components/Covid/CovidAgeChart";
import CovidHighMap from "../components/Covid/CovidHighMap.jsx";
import { CovidCountChart } from "../components/Covid/CovidCountChart";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function CovidInfo() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <NavBar />
      <div className="covid-container">
        <div className="covid-oneline">
          <CovidCountChart />
        </div>
        <div className="covid-oneline">
          <CovidAgeChart />
        </div>
        <div className="covid-2container">
          <div className="today-covid">
            <CovidHighMap />
          </div>
          <div className="today-covid">
            <CovidGenderChart />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
