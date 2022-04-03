import "./MedicalList.css";
import { IHospital, ICoord } from "../../interface";
import ParkingPng from "../../assets/medical_png/parking.png";

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
    <>
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
              <p>
                <span className="hos-list-name">{hospital.name}</span>
                {hospital.type === "hospital" && hospital.code === 11 && (
                  <span className="hos-list-code">{hospital.code_name}</span>
                )}
                {hospital.parking_count > 0 && (
                  <img src={ParkingPng} alt="주차" />
                )}
              </p>
              <p className="hos-list-subject">
                {hospital.type === "hospital" && hospital.code <= 21 && (
                  <span>{hospital.code_name}</span>
                )}
                {hospital.type === "hospital" &&
                  hospital.code > 21 &&
                  hospital.medical_subject_list.length > 0 &&
                  hospital.medical_subject_list.map((subjects, index) => (
                    <span key={index}>{subjects.name} </span>
                  ))}
              </p>
              <p className="hos-list-address">{hospital.address}</p>
              {hospital.opentime.opentime_valid === "Y" && (
                <p className="hos-list-openornot">{hospital.openornot}</p>
              )}
              {hospital.opentime.opentime_valid === "N" && (
                <p className="hos-list-openornot">영업시간정보없음</p>
              )}
              <p className="hos-list-tel">{hospital.tel}</p>
              <p className="hos-list-distance">
                {hospital.distance.toFixed()}m
              </p>
            </div>
          ))}
        {hospitals && hospitals.length === 0 && <h3>검색결과가 없습니다.</h3>}
      </div>
      <div>1, 2, 3</div>
    </>
  );
}
