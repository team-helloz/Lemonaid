import "./MedicalList.css";
import { IHospital, ICoord } from "../../interface";

export interface HospitalProps {
  hospitals: IHospital[];
  setViewCenter: (coord: ICoord) => void;
  handDetailOpen: (hospital: IHospital) => void;
}

export default function MedicalList({
  hospitals,
  setViewCenter,
  handDetailOpen,
}: HospitalProps) {
  const onClickListItem = (hospital: IHospital) => {
    // console.log(hospital.name);
    setViewCenter({ lat: hospital.lat, lng: hospital.lng });
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
          <p>{hospital.distance.toFixed()}m</p>
          <p>{hospital.tel}</p>
        </div>
      ))}
    </div>
  );
}
