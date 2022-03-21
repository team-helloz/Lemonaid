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
      <div className="hos-home" onClick={routeHome}>
        홈으로 이동
      </div>
      <div className="hos-list">sdfsdsdf</div>
      <HospitalMap />
    </div>
  );
}
