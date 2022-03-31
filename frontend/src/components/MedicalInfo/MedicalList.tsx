import "./MedicalList.css";
import { IHospital, ICoord } from "../../interface";

export interface HospitalProps {
  hospitals: IHospital[];
  setViewCenter: (coord: ICoord) => void;
  handDetailOpen: (hospital: IHospital) => void;
  selectHospital: string;
  UpdateSelectHospital: (selectHospital: string) => void;
}

export default function MedicalList({
  hospitals,
  setViewCenter,
  handDetailOpen,
  selectHospital,
  UpdateSelectHospital,
}: HospitalProps) {
  const onClickListItem = (hospital: IHospital) => {
    // console.log(hospital.name);
    setViewCenter({ lat: hospital.lat, lng: hospital.lng });
    handDetailOpen(hospital);
  };

  return (
    <div>
      {hospitals &&
        hospitals.map((hospital) => (
          <div
            className={
              "hos-list-container" +
              (hospital.name === selectHospital ? "-selected" : "")
            }
            onClick={() => onClickListItem(hospital)}
            onMouseEnter={() => UpdateSelectHospital(hospital.name)}
            onMouseLeave={() => UpdateSelectHospital("")}
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
