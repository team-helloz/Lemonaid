import "./MedicalList.css";
import { IHospital } from "../../interface";

export interface Coord {
  lat: number;
  lng: number;
}

export interface HospitalProps {
  hospitals: IHospital[];
  setNowCenter: (coord: Coord) => void;
  handDetailOpen: (hospital: IHospital) => void;
}

export default function MedicalList({
  hospitals,
  setNowCenter,
  handDetailOpen,
}: HospitalProps) {
  const onClickListItem = (hospital: IHospital) => {
    // console.log(hospital.name);
    setNowCenter({ lat: hospital.lat, lng: hospital.lng });
    handDetailOpen(hospital);
  };

  return (
    <div>
      {hospitals.map((hospital) => (
        <div
          className="hos-list-container"
          onClick={() => onClickListItem(hospital)}
          key={hospital.no}
        >
          <h1>{hospital.name}</h1>
          <p>{hospital.type}</p>
          <p>{hospital.tel}</p>
        </div>
      ))}
    </div>
  );
}
