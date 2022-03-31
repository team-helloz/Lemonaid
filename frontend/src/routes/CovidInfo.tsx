import NavBar from "../components/NavBar";
import "./CovidInfo.css";
import Footer from "../components/Footer";
export default function CovidInfo() {
  return (
    <div>
      <NavBar />
      <div className="covid-container">
        <div className="covid-2container">
          <div className="today-covid"></div>
          <div className="today-covid"></div>
        </div>
        <div className="covid-oneline"></div>
      </div>
      <Footer />
    </div>
  );
}
