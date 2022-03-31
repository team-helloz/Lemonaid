// Components
import NavBar from "../components/NavBar";
import BodyPart from "../components/DiseaseInfo/BodyPart";
import Symptom from "../components/DiseaseInfo/Symptom";
import SelectedSymptom from "../components/DiseaseInfo/SelectedSymptom";
import DiseaseList from "../components/DiseaseInfo/DiseaseList";
import Footer from "../components/Footer";
// React
import { useState } from "react";
// Style
import "./DiseaseInfo.css";

export default function DiseaseInfo() {
  const [nowPart, setPart] = useState<string>("머리");
  const [nowSymptoms, setSymptoms] = useState<string[]>([]);

  function updatePart(nowPart: string): void {
    setPart(nowPart);
  }

  function addSymptom(symptomname: string): void {
    setSymptoms([...nowSymptoms, symptomname]);
  }

  function removeSymptom(nowSymptoms: string[]): void {
    setSymptoms(nowSymptoms);
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <NavBar />
      <div className="disease-group">
        <BodyPart nowPart={nowPart} updatePart={updatePart} />
      </div>
      <div className="disease-group">
        <SelectedSymptom
          nowSymptoms={nowSymptoms}
          removeSymptom={removeSymptom}
        />
      </div>
      <div className="disease-group">
        <Symptom
          nowPart={nowPart}
          nowSymptoms={nowSymptoms}
          addSymptom={addSymptom}
          removeSymptom={removeSymptom}
        />
      </div>
      <div className="disease-group">
        <DiseaseList nowSymptoms={nowSymptoms} />
      </div>
      <button onClick={scrollToTop} className="to-top">
        맨 위로
      </button>
      <Footer />
    </>
  );
}
