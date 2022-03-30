// Components
import NavBar from "../NavBar";
// Router
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// Style
import "./DiseaseDetail.css";

interface Sysptom {
  no: number;
  name: string;
}
interface Disease {
  no: number;
  name: string;
  treatment: string;
  symptom_description: string;
  cause: string;
  caution: string;
  definition: string;
  symptoms: Sysptom[];
}

export default function DiseaseDetail(Params: any) {
  const [disease, setDisease] = useState<Disease>(Params);
  const history = useHistory();
  const handleLoad = () => {
    const disNo = Params.match.params.diseaseno;
    axios
      .get(`/disease/${disNo}`)
      .then((res) => {
        console.log(res.data.data);
        setDisease(res.data.data);
        console.log(disease);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleLoad();
  }, []);

  function routeMedical() {
    history.push("/medical");
  }

  return (
    <div>
      <NavBar />
      <div className="d-detail-page">
        <div className="d-detail-content">
          <div className="d-detail-title">
            <div className="dd-name-title">
              <p>질병명</p>
            </div>
            <div className="dd-main-title">
              <p className="d-detail-name">{disease.name}</p>
              <button className="d-medical-btn">
                <img onClick={routeMedical} src="/map.png" alt="map" />
              </button>
            </div>
            <div className="title-small"></div>
          </div>
          <div className="dd-2-box">
            <div className="d-item-box">
              <p className="d-item-mini-title">증상</p>
              <div className="d-detail-list">
                {/* {disease.symptoms.map((symptom, i: number) => (
                  <p key={i}>{symptom.name}</p>
                ))} */}
              </div>
            </div>
            <div className="d-item-box">
              <p className="d-item-mini-title">관련질환</p>
              {/* <div className="d-detail-list">
                {diseaseDetailInfo.related.map((relate, i: number) => (
                  <p key={i}>{relate}</p>
                ))}
              </div> */}
            </div>
            <div className="d-item-box">
              <p className="d-item-mini-title">동의어</p>
              <div className="d-detail-list">
                {/* {diseaseDetailInfo.sames.map((same, i: number) => (
                  <p key={i}>{same}</p>
                ))} */}
              </div>
            </div>
            <div className="d-item-img-box">
              <img src="/gamgi.jpg" alt="" />
            </div>
          </div>
          <div className="dd-content">
            <div className="dd-content-title">
              <span>정의</span>
            </div>
            <div className="dd-content-content">
              <p>{disease.definition}</p>
            </div>
            <div className="dd-content-title">
              <span>원인</span>
            </div>
            <div className="dd-content-content">
              <p>{disease.cause}</p>
            </div>
            <div className="dd-content-title">
              <span>진단</span>
            </div>
            <div className="dd-content-content">
              <p>{disease.symptom_description}</p>
            </div>
            <div className="dd-content-title">
              <span>치료</span>
            </div>
            <div className="dd-content-content">
              <p>{disease.treatment}</p>
            </div>
            <div className="dd-content-title">
              <span>주의사항</span>
            </div>
            <div className="dd-content-content">
              <p>{disease.caution}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
