// Style
import "./SelectedSymptom.css";

interface SymptomsProps {
  nowSymptoms: string[];
  removeSymptom: (arg: string[]) => void;
}

export default function Symptom(props: SymptomsProps) {
  const { nowSymptoms, removeSymptom } = props;

  function onClickSymptom(symptomname: string) {
    let newSymptoms = nowSymptoms.filter((element) => element !== symptomname);
    removeSymptom(newSymptoms);
  }

  return (
    <div className="selected-symptom-group">
      {nowSymptoms.map((symptom, i: number) => (
        <button
          key={i}
          onClick={() => {
            onClickSymptom(symptom);
          }}
          className="ssg-button"
        >
          {symptom}
        </button>
      ))}
    </div>
  );
}
