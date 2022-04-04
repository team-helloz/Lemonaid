// Router
import { useHistory } from "react-router-dom";
// Style
import "./DiseaseList.css";
// SVG
import Popup from "../../assets/popup.svg";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Symptom from "./Symptom";

interface Sysptom {
  no: number;
  name: string;
}

interface SymptomProps {
  nowSymptoms: string[];
}

interface relatedDisease {
  no: number;
  name: string;
}

interface Diseases {
  no: number;
  name: string;
  treatment: string;
  symptom_description: string;
  cause: string;
  caution: string;
  definition: string;
  symptoms: Sysptom[];
  related_disease: relatedDisease[];
  synonym: string;
}
export default function DiseaseList(props: SymptomProps) {
  const { nowSymptoms } = props;
  const [diseases, setDiseases] = useState<Diseases[]>([]);
  const history = useHistory();
  function routeDetail(diseaseno: number) {
    history.push(`/disease/${diseaseno}`);
  }
  const handleLoad = () => {
    setDiseases([]);
    axios
      .get(`/disease/?symptoms=${nowSymptoms}`)
      .then((res) => {
        setDiseases(res.data.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleLoad();
  }, []);

  useEffect(() => {
    handleLoad();
    console.log(diseases);
  }, [nowSymptoms]);

  return (
    <div className="disease-list-container">
      <div className="disease-list">
        {diseases.map((disease) => (
          <div key={disease.no} className="disease-item disease-box">
            <div className="disease-img" />
            <div className="disease-content">
              <div className="detail-list">
                <p className="disease-name">{disease.name}</p>
                <img
                  src={Popup}
                  alt=""
                  width={"18px"}
                  onClick={() => routeDetail(disease.no)}
                  className="popup-btn"
                />
              </div>
              <div className="list-title-box">
                <div>
                  <p className="list-title">관련질병</p>
                  <div className="detail-item-list">
                    {disease.related_disease.map((disease: any) => (
                      <p key={disease.no}>{disease.name} </p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="list-title">증상</p>
                  <div className="detail-item-list">
                    {disease.symptoms.map((symptom: any, j: number) => (
                      <span key={j}>{symptom.name} </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="list-title">동의어</p>
                  <div className="detail-item-list">
                    {disease.synonym === "" ? (
                      <p>-</p>
                    ) : (
                      <p>{disease.synonym}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
