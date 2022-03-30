// Components
import NavBar from "../NavBar";
// Router
import { useHistory } from "react-router-dom";
// Style
import "./DiseaseDetail.css";

export default function DiseaseDetail() {
  const history = useHistory();

  function routeMedical() {
    history.push("/medical");
  }

  const diseaseDetailInfo = {
    name: "감기",
    symptoms: ["머리 증상 2", "코 증상 1", "입 증상 2", "목 증상 1"],
    related: ["폐렴", "코로나", "독감"],
    courses: ["내과", "이비인후과"],
    sames: ["가암기"],
    definition: "감기란 무엇인가?",
    cause: "어째서 감기에 걸리는가?",
    diagnosis: "감기라고 어찌 판단하는가?",
    therapy: "감기는 어떻게 치료하는가?",
    pass: "감기는 어떤 순서로 진행되는가?",
    notandum: "감기는 무엇을 주의해야 하는가?",
  };

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
              <p className="d-detail-name">{diseaseDetailInfo.name}</p>
              <button className="d-medical-btn">
                <img onClick={routeMedical} src="/map.png" alt="map" />
              </button>
            </div>
            <div className="title-small">
              {diseaseDetailInfo.courses.map((course, i: number) => (
                <p key={i}>{course}</p>
              ))}
            </div>
          </div>
          <div className="dd-2-box">
            <div className="d-item-box">
              <p className="d-item-mini-title">증상</p>
              <div className="d-detail-list">
                {diseaseDetailInfo.symptoms.map((symptom, i: number) => (
                  <p key={i}>{symptom}</p>
                ))}
              </div>
            </div>
            <div className="d-item-box">
              <p className="d-item-mini-title">관련질환</p>
              <div className="d-detail-list">
                {diseaseDetailInfo.related.map((relate, i: number) => (
                  <p key={i}>{relate}</p>
                ))}
              </div>
            </div>
            <div className="d-item-box">
              <p className="d-item-mini-title">동의어</p>
              <div className="d-detail-list">
                {diseaseDetailInfo.sames.map((same, i: number) => (
                  <p key={i}>{same}</p>
                ))}
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
              <p>{diseaseDetailInfo.definition}</p>
            </div>
            <div className="dd-content-title">
              <span>원인</span>
            </div>
            <div className="dd-content-content">
              <p>{diseaseDetailInfo.cause}</p>
            </div>
            <div className="dd-content-title">
              <span>진단</span>
            </div>
            <div className="dd-content-content">
              <p>{diseaseDetailInfo.diagnosis}</p>
            </div>
            <div className="dd-content-title">
              <span>치료</span>
            </div>
            <div className="dd-content-content">
              <p>{diseaseDetailInfo.therapy}</p>
            </div>
            <div className="dd-content-title">
              <span>경과</span>
            </div>
            <div className="dd-content-content">
              <p>{diseaseDetailInfo.pass}</p>
            </div>
            <div className="dd-content-title">
              <span>주의사항</span>
            </div>
            <div className="dd-content-content">
              <p>{diseaseDetailInfo.notandum}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
