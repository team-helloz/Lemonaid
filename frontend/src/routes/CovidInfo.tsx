import NavBar from "../components/NavBar";
import "./CovidInfo.css";
import Footer from "../components/Footer";

import { CovidGenderChart } from "../components/Covid/CovidGenderChart";
import { CovidAgeChart } from "../components/Covid/CovidAgeChart";
import CovidHighMap from "../components/Covid/CovidHighMap.jsx";
import { CovidCountChart } from "../components/Covid/CovidCountChart";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function CovidInfo() {
  const [covidTotal, setTotal] = useState<number>(0);
  const [covidYes, setYes] = useState<number>(0);
  const [cn, setCn] = useState<string>("");
  const handleLoad = () => {
    axios
      .get("/corona/count/today")
      .then((res) => {
        setTotal(res.data.corona_count_today[0].count_total)
      })
    axios.get("/corona/count")
      .then((res) => {
        setYes(res.data[1].count_total)
        setCn(covidTotal.toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","))
      })
  }
  useEffect(() => {
    handleLoad();

  }, []);
  useEffect(() => {
    handleLoad();
  }, [cn]);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <NavBar />
      <div className="covid-container">
        <div className="covid-main-title">
          <p>신규 확진자 </p>
          <p>{cn}   {covidTotal > covidYes ? <span className="covid-up">{covidTotal - covidYes}↑</span> : <span className="covid-down">{covidYes - covidTotal}↓</span>}
          </p>
        </div>
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

      </div>
      <Footer />
    </div>
  );
}
