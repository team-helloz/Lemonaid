import "./HospitalList.css"

interface Hospital {
  id: number;
  type: string;
  name: string;
  call: string;
  address: string;
}

interface HospitalProps {
  hospitals: Hospital[];
}

export default function HospitalList({ hospitals }: HospitalProps) {
  console.log(hospitals);
  return (
    <div >
      {hospitals.map((hospital) => (
        <div className="hos-list-container">
          <h1>{hospital.name}</h1>
          <p>{hospital.type}</p>
          <p>{hospital.call}</p>
        </div>
      ))}
    </div>
  );
}
