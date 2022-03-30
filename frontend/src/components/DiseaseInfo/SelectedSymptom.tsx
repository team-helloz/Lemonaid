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
      <p>선택한 증상 :</p>
      {nowSymptoms.map((symptom, i: number) => (
        <div
          key={i}
          onClick={() => {
            onClickSymptom(symptom);
          }}
          className="ssg-button"
        >
          {symptom} <span className="ssg-close">✖︎</span>
        </div>
      ))}
    </div>
  );
}
