import { useHistory } from "react-router-dom";
import "./HospitalInfo.css";
import HospitalMap from "../components/HospitalInfo/HospitalMap";

export default function HospotalInfo() {
  const history = useHistory();

  function routeHome() {
    history.push("/");
  }
  return (
    <div>
      <div className="hos-left">
        <div className="hos-search"></div>
        <div className="hos-home" onClick={routeHome}>
          Home
        </div>
      </div>
      <div className="hos-center"></div>
      <div className="hos-right"></div>
      <HospitalMap />
    </div>
  );
}
