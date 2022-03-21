import "./BodyPart.css";


export default function Symptom() {

  const symptoms = [
    "증상", "증상",
    "증상", "증상",
    "증상", "증상",
    "증상", "증상",
    "증상", "증상",
    "증상", "증상",
    "증상", "증상",
  ]

  return (
    <div className="symptom-group-box">
      {symptoms.map((symptom, i:number) => (
        <button key={i}>
          {symptom}
        </button>
      ))}
    </div>
  );
}