import NavBar from "../components/NavBar";
import "./CovidInfo.css";
import Footer from "../components/Footer";

import { CovidGenderChart } from "../components/Covid/CovidGenderChart";
import { CovidAgeChart } from "../components/Covid/CovidAgeChart";
import CovidHighMap from "../components/Covid/CovidHighMap.jsx";
import { CovidCountChart } from "../components/Covid/CovidCountChart";

export default function CovidInfo() {
  return (
    <div>
      <NavBar />
      <div className="covid-container">
        <div className="covid-2container">
          <div className="today-covid">
            <CovidGenderChart />
          </div>
          <div className="today-covid">
            <CovidAgeChart />
          </div>
        </div>
        <div className="covid-oneline">
          <CovidCountChart />
        </div>
      </div>
      <CovidHighMap />
      <Footer />
    </div>
  );
}
