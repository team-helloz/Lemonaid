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

interface Subject {
  no: number;
  name: string;
}

interface relatedDisease {
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
  subjects: Subject[];
  related_disease: relatedDisease[];
  symptoms: Sysptom[];
  synonym: string;
}

export default function DiseaseDetail(Params: any) {
  const [disease, setDisease] = useState<Disease>(Params);
  const history = useHistory();

  function routeDetail(diseaseno: number) {
    history.push(`/disease/${diseaseno}`);
  }

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

  useEffect(() => {
    handleLoad();
  }, [Params.match.params.diseaseno]);

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
            <div className="title-small">
              <p>진료과목</p>
              {disease.symptoms !== undefined && (
                <>
                  {disease.subjects.map((subject, i: number) => (
                    <p className="title-sub" key={i}>
                      {subject.name}
                    </p>
                  ))}
                </>
              )}
            </div>
          </div>
          <div className="dd-2-box">
            <div className="d-item-box">
              <p className="d-item-mini-title">증상</p>
              {disease.symptoms !== undefined ? (
                <div className="d-detail-list">
                  {disease.symptoms.map((symptom, i: number) => (
                    <>
                      {i < disease.symptoms.length - 1 && (
                        <span key={i}>{symptom.name}, </span>
                      )}
                      {i === disease.symptoms.length - 1 && (
                        <span key={i}>{symptom.name}</span>
                      )}
                    </>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="d-item-box">
              <p className="d-item-mini-title">관련 질병</p>
              {disease.symptoms !== undefined ? (
                <div className="d-detail-list">
                  {disease.related_disease.map((relate, i: number) => (
                    <span
                      onClick={() => routeDetail(relate.no)}
                      className="dd-hash-tag"
                      key={i}
                    >
                      #{relate.name}
                    </span>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="d-item-box">
              <p className="d-item-mini-title">동의어</p>
              <div className="d-detail-list">
                {disease.synonym !== "" ? <p>{disease.synonym}</p> : <p>-</p>}
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
              {disease.definition !== "" ? (
                <p>{disease.definition}</p>
              ) : (
                <p>없음</p>
              )}
            </div>
            <div className="dd-content-title">
              <span>원인</span>
            </div>
            <div className="dd-content-content">
              {disease.cause !== "" ? <p>{disease.cause}</p> : <p>없음</p>}
            </div>
            <div className="dd-content-title">
              <span>진단</span>
            </div>
            <div className="dd-content-content">
              {disease.symptom_description !== "" ? (
                <p>{disease.symptom_description}</p>
              ) : (
                <p>없음</p>
              )}
            </div>
            <div className="dd-content-title">
              <span>치료</span>
            </div>
            <div className="dd-content-content">
              {disease.treatment !== "" ? (
                <p>{disease.treatment}</p>
              ) : (
                <p>없음</p>
              )}
            </div>
            <div className="dd-content-title">
              <span>주의사항</span>
            </div>
            <div className="dd-content-content">
              {disease.caution !== "" ? <p>{disease.caution}</p> : <p>없음</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
