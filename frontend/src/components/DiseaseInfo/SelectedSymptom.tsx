// Style
import "./SelectedSymptom.css";

interface SymptomsProps {
  symptoms: string[];
  removeSymptom: (arg: string[]) => void;
}

export default function Symptom(props: SymptomsProps) {

  const { symptoms, removeSymptom } = props;

  function onClickSymptom(symptomname: string) {
    let newSymptoms = symptoms.filter((element) => element !== symptomname);
    removeSymptom(newSymptoms);
  }

  return (
    <div>
      <p>증상 : </p>
      { symptoms.map((symptom, i: number) => (
        <button
          key={i}
          onClick={() => {onClickSymptom(symptom)}}
          className="selected-symptom-btn"
        >
          {symptom}
        </button>
      ))}
    </div>
  );
}