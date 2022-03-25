import { useHistory } from "react-router-dom";
import "./MedicalInfo.css";
import MedicalMap from "../components/MedicalInfo/MedicalMap";
import MedicalList from "../components/MedicalInfo/MedicalList";

export default function MedicalInfo() {
  const history = useHistory();

  interface hospital {
    id: number;
    type: string;
    name: string;
    call: string;
    address: string;
  }

  const hospitalList: hospital[] = [
    {
      id: 1,
      type: "병원",
      name: "서울병원",
      call: "02-154-8756",
      address: "서울 동작구 XXX",
    },
    {
      id: 2,
      type: "약국",
      name: "대구병원",
      call: "02-154-8755",
      address: "서울 동작구 XXX",
    },
    {
      id: 3,
      type: "한의원",
      name: "구미병원",
      call: "02-154-8456",
      address: "서울 동작구 XXX",
    },
    {
      id: 4,
      type: "병원",
      name: "부산병원",
      call: "02-154-8786",
      address: "서울 동작구 XXX",
    },
    {
      id: 5,
      type: "약국",
      name: "광주병원",
      call: "02-154-8776",
      address: "서울 동작구 XXX",
    },
    {
      id: 6,
      type: "병원",
      name: "강릉병원",
      call: "02-154-8736",
      address: "서울 동작구 XXX",
    },
    {
      id: 7,
      type: "한의원",
      name: "남해병원",
      call: "02-154-5756",
      address: "서울 동작구 XXX",
    },
  ];
  function routeHome() {
    history.push("/");
  }
  return (
    <>
      <div className="medi-left">
        <div className="medi-search"></div>
        <div className="medi-home" onClick={routeHome}>
          Home
        </div>
      </div>
      <div className="medi-center1">
        <input type="text" />
      </div>
      <div className="medi-center2"></div>
      <div className="medi-right">
        <MedicalList hospitals={hospitalList} />
      </div>
      <MedicalMap />
    </>
  );
}
