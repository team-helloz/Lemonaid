import "./MedicalList.css";

export interface Hospital {
  id: number;
  type: string;
  name: string;
  call: string;
  address: string;
  lat: number;
  lng: number;
}

export interface Coord {
  lat: number;
  lng: number;
}

export interface HospitalProps {
  hospitals: Hospital[];
  setNowCenter: (coord: Coord) => void;
  handDetailOpen: (hospital: Hospital) => void;
}

export default function MedicalList({
  hospitals,
  setNowCenter,
  handDetailOpen,
}: HospitalProps) {
  const onClickListItem = (hospital: Hospital) => {
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
          key={hospital.id}
        >
          <h1>{hospital.name}</h1>
          <p>{hospital.type}</p>
          <p>{hospital.call}</p>
        </div>
      ))}
    </div>
  );
}
