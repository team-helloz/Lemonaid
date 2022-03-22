// Components
import NavBar from "../components/NavBar";
import BodyPart from "../components/DiseaseInfo/BodyPart";
import Symptom from "../components/DiseaseInfo/Symptom";
import SelectedSymptom from "../components/DiseaseInfo/SelectedSymptom";
import DiseaseList from "../components/DiseaseInfo/DiseaseList";
// React
import { useState } from "react";

export default function DiseaseInfo() {

  const [nowPart, setPart] = useState<number>(0);
  const [nowSymptoms, setSymptoms] = useState<string[]>([]);

  function updatePart(nowPart: number): void {
    setPart(nowPart);
  }

  function addSymptom(symptomname: string): void {
    setSymptoms([...nowSymptoms, symptomname]);
  }

  function removeSymptom(nowSymptoms: string[]): void {
    setSymptoms(nowSymptoms);
  }

  return (
    <div>
      <NavBar />
      <h1>증상/질병 조회</h1>
      <BodyPart
        nowPart={nowPart}
        updatePart={updatePart}
      />
      <br />
      <SelectedSymptom
        symptoms={nowSymptoms}
        removeSymptom={removeSymptom}
      />
      <Symptom
        nowPart={nowPart}
        addSymptom={addSymptom}
      />
      <br />
      <hr />
      <DiseaseList />
    </div>
  );
}
