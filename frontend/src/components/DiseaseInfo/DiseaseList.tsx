// Router
import { useHistory } from "react-router-dom";
// Style
import "./DiseaseList.css";
// SVG
import Popup from "../../assets/popup.svg";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

interface Sysptom {
  no: number;
  name: string;
}

interface SymptomProps {
  nowSymptoms: string[];
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
}
export default function DiseaseList(props: SymptomProps) {
  const { nowSymptoms } = props;
  const [diseases, setDiseases] = useState<Diseases[]>([]);
  const history = useHistory();
  function routeDetail(diseaseno: number) {
    history.push(`/disease/${diseaseno}`);
  }
  const handleLoad = () => {
    axios
      .get("/disease")
      .then((res) => {
        setDiseases(res.data.data);
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
  }, [nowSymptoms]);

  return (
    <div className="disease-list-container">
      <div className="disease-list">
        {diseases.map((disease) => (
          <div key={disease.no} className="disease-item disease-box">
            <div
              onClick={() => routeDetail(disease.no)}
              className="disease-img"
            />
            <div className="disease-content">
              <div className="detail-list">
                <p
                  onClick={() => routeDetail(disease.no)}
                  className="disease-name"
                >
                  {disease.name}
                </p>
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
                  <p className="list-title">증상</p>
                  <div className="detail-item-list">
                    {disease.symptoms.map((symptom: any, j: number) => (
                      <p key={j}>{symptom.name}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="list-title">관련 질환</p>
                  <div className="detail-item-list">
                    -
                  </div>
                </div>
                <div>
                  <p className="list-title">진료 과목</p>
                  <div className="detail-item-list">
                    -
                  </div>
                </div>
                <div>
                  <p className="list-title">동의어</p>
                  <div className="detail-item-list">
                    -
                  </div>
                </div>
              </div>
              {/* <div className="list-title-box">
                <div className="item-title-blue"></div>
                <p className="list-title">진료 과목</p>
              </div>
              <div className="detail-item-list">
                {disease.courses.map((course, j: number) => (
                  <p key={j}>{course}</p>
                ))}
              </div> */}

              {/* <div className="list-title-box">
                <div className="item-title-blue"></div>
                <p className="list-title">동의어</p>
              </div>
              <div className="detail-item-list">
                {disease.sames.map((same, j: number) => (
                  <p key={j}>{same}</p>
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
